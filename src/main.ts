import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
// import { ValidationPipe } from '@nestjs/common';
import * as dotenv from 'dotenv';
// import { ConfigService } from '@nestjs/config';
import { NestExpressApplication } from '@nestjs/platform-express';

async function bootstrap() {
  try {
    dotenv.config();
    const app = await NestFactory.create<NestExpressApplication>(AppModule);
    // const configService = app.get(ConfigService);

    const mongoose = await import('mongoose');
    // const mongoURL = configService.get<string>('MONGODB_URI');
    const mongoURL = process.env.MONGO_URI;
    await mongoose.connect(mongoURL);

    // app.useGlobalPipes(new ValidationPipe());
    app.enableCors();
    app.setGlobalPrefix('api');
    // app.useStaticAssets(path.join(__dirname, '..', 'public'));

    const port = process.env.PORT || 3000;
    await app.listen(port, () => {
      console.log(`Server is running on ${process.env.HOST}:${port}/api`);
    });

    console.log('Connection to MongoDB successful');
  } catch (error) {
    console.error('Failed to connect to MongoDB:', error);
    process.exit(1);
  }
}

bootstrap();
