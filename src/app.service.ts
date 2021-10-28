import { Injectable, Res } from '@nestjs/common';
import * as fs from 'fs';

@Injectable()
export class AppService {
  rezultatai: any = [];
  getAllFilePaths(@Res() res) {
    this.rezultatai = [];
    fs.readdir('./uploaded', (err, files) => {
      files.forEach((file) => {
        this.rezultatai.push(file);
      });
      res.json(this.rezultatai);
    });
  }
}
