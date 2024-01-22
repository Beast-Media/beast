import { Injectable } from '@nestjs/common';
import { ProbeData } from './dto/probe.dto';
import { spawn } from 'child_process';
import { validateParse } from 'typia/lib/json';

@Injectable()
export class FFmpegService {
  async probeFile(path: string): Promise<ProbeData | null> {
    const { stdout } = await spawn(
      `ffprobe`,
      [
        `-v`,
        `quiet`,
        `-print_format`,
        `json`,
        `-show_format`,
        `-show_streams`,
        `${path}`,
      ],
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
}
