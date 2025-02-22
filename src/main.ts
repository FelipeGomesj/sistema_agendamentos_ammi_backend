import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  //Habilitando CORS para permitir requisições do frontend
  app.enableCors({
    origin: 'http://localhost:3000', //permitie chamadas apenas do frontend
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true,// Permite envio de cookies e headers autenticados
  })

  await app.listen(process.env.PORT ?? 3001);
}
bootstrap();
