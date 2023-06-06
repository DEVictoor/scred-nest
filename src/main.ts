import { ConfigService } from '@nestjs/config';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Load configuService
  const configService = app.get(ConfigService);
  const port = configService.get('PORT');
  console.log(`App running in port ${port}`);

  await app.listen(port);
}
bootstrap();