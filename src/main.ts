import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors({
    origin: true, // permitir solicitações de todas as origens
    credentials: true, // permitir solicitações com credenciais
  });
  const appConfig = app.get(ConfigService);
  const appPort = appConfig.get('BACKEND_PORT');

  await app.listen(appPort || 3000);

  console.log(`Application is running on: ${await app.getUrl()}`);
}
bootstrap();
