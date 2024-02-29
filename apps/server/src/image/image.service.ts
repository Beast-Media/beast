import { Injectable } from '@nestjs/common';
import { createHash } from 'crypto';
import { writeFile } from 'fs/promises';
import { join } from 'path/posix';
import sharp, { ResizeOptions } from 'sharp';

@Injectable()
export class ImageService {
  async downloadAndStore(
    imageUrl: string,
    dest: string,
    resizeVariants: Record<string, ResizeOptions>,
  ) {
    const res = await fetch(imageUrl);
    const buffer = Buffer.from(await res.arrayBuffer());
    return this.storeImage(buffer, dest, resizeVariants);
  }

  async storeImage(
    buffer: Buffer,
    dest: string,
    resizeVariants: Record<string, ResizeOptions>,
  ): Promise<string[]> {
    const hashSum = createHash('sha256');
    hashSum.update(buffer);
    const hash = hashSum.digest('hex');

    const writeBuffer = async (buffer: Buffer, name: string) => {
      const filename = `images/${hash}-${name}.jpg`;
      const path = join(dest, filename);
      await writeFile(path, buffer);
      return filename;
    };

    const images = [
      await sharp(buffer)
        .jpeg({ progressive: true, quality: 100 })
        .toBuffer()
        .then((buffer) => writeBuffer(buffer, 'original')),
    ];

    for (const [name, resize] of Object.entries(resizeVariants)) {
      const resizeBuffer = await sharp(buffer)
        .resize(resize)
        .jpeg({ progressive: true, quality: 100 })
        .toBuffer();
      const path = await writeBuffer(resizeBuffer, name);
      images.push(path);
    }
    return images;
  }
}
