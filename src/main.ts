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

  // memory
  const used = process.memoryUsage().heapUsed / 1024 / 1024;
  console.log(`The script use aproximaly ${Math.round(used * 100) / 100} MB`);
}
bootstrap();
