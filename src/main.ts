import { ValidationPipe } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { useContainer } from 'class-validator';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Prefix
  app.setGlobalPrefix('api/v1');

  // Swagger
  const config = new DocumentBuilder()
    .setTitle('Scred api document')
    .setDescription('The scred api description')
    .setVersion('1.0')
    .addBearerAuth()
    .addTag('scred')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api/v1/docs', app, document);

  // Pipe validation
  app.useGlobalPipes(new ValidationPipe({ whitelist: true, transform: true }));

  useContainer(app.select(AppModule), { fallbackOnErrors: true });

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
