import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { cors: true });
  const port
  console.log('running on port')
  await app.listen(3001);
}
bootstrap();
