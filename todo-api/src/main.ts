import { NestFactory } from '@nestjs/core';
import { AppModule } from '@/AppModule';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('api');

  await app.listen(3333);
}

bootstrap();
