import { Injectable } from '@nestjs/common';
import { ProbeData } from './dto/probe.dto';
import { spawn } from 'child_process';
import { validateParse } from 'typia/lib/json';
import { ConfigService } from 'src/config/config.service';
import { join } from 'path/posix';

@Injectable()
export class FFmpegService {
  constructor(private configService: ConfigService) {}

  getFfprobePath() {
    const isWin = process.platform === 'win32';

    const binName = isWin ? 'ffprobe.exe' : 'ffprobe';
    const ffmpegPath = this.configService.getFfmpegPath();
    if (ffmpegPath) {
      return join(ffmpegPath, binName);
    }
    return binName;
  }

  getFfmpegPath() {
    const isWin = process.platform === 'win32';
    const binName = isWin ? 'ffmpeg.exe' : 'ffmpeg';
    const ffmpegPath = this.configService.getFfmpegPath();
    if (ffmpegPath) {
      return join(ffmpegPath, binName);
    }
    return binName;
  }

  async probeFile(path: string): Promise<ProbeData | null> {
    const { stdout } = spawn(
      this.getFfprobePath(),
      this.args`
        -v quiet
        -print_format json
        -show_format
        -show_streams
        "${path}"
      `,
      {},
    );
    if (!stdout) return null;
    return new Promise((resolve, rejects) => {
      let out = '';
      stdout.on('data', (data) => {
        out += data.toString();
      });
      stdout.on('end', () => {
        const val = validateParse<ProbeData>(out);
        if (val.errors.length >= 1) console.error(val.errors);
        if (val.success) resolve(val.data);
        else rejects(new Error('probing error on: ' + path));
      });
    });
  }

  args(strings: TemplateStringsArray, ...values: any[]) {
    const template = strings.reduce((acc, str, i) => {
      const value = values[i] !== undefined ? String(values[i]) : '';
      // Replace newline characters with spaces in both strings and values
      return acc + str.replace(/\n/g, ' ') + value.replace(/\n/g, ' ');
    }, '');

    const args: string[] = [];
    let currentArg = '';
    let isInQuotes = false;

    for (let i = 0; i < template.length; i++) {
      const char = template[i];

      if (char === '"') {
        isInQuotes = !isInQuotes;
        currentArg += char; // Include quotes in argument
      } else if (char === ' ' && !isInQuotes) {
        if (currentArg !== '') {
          args.push(currentArg.trim());
          currentArg = '';
        }
      } else {
        currentArg += char;
      }
    }

    if (currentArg !== '') {
      args.push(currentArg.trim());
    }

    return args.map((arg) => {
      if (arg.startsWith('"') && arg.endsWith('"')) {
        return arg.substring(1, arg.length - 1);
      }
      return arg;
    });
  }
}
