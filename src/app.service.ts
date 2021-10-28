import { Injectable, Res } from '@nestjs/common';
import * as fs from 'fs';
@Injectable()
export class AppService {
  async sgetAllFilePaths(@Res() res) {
    const result = [];
    fs.readdir('./uploaded', (err, files) => {
      files.forEach((file) => {
        console.log(file);
        result.push(file);
      });
    });
    await res.json(result);
  }
}
