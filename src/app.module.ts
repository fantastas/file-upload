import { AppService } from './app.service';
import { AppController } from './app.controller';
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { MulterModule } from '@nestjs/platform-express';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost/nest'),
    MulterModule.register({
      dest: './uploaded',
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
