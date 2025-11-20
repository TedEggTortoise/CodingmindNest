import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
    .setTitle('NestJS API')
    .setDescription('The API documentation for your NestJS application')
    .setVersion('1.0')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document); // -> /api

  await app.listen(process.env.PORT ?? 3001);
  console.log(
    `Swagger running at http://localhost:${process.env.PORT ?? 3001}/api`,
  );
}
bootstrap();
