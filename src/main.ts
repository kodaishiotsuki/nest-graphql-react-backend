import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // Enable CORS to allow the frontend to communicate with the backend
  app.enableCors();
  await app.listen(3000);
}
bootstrap();
