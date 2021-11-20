import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as dotenv from 'dotenv';
import { json, urlencoded } from 'express';

dotenv.config();
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();
  // app.use(json({ limit: '200mb' }));
  // app.use(urlencoded({ limit: '200mb' }));
  await app.listen(process.env.PORT || 8080);
}
bootstrap();
