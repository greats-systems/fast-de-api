import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { cors: true });
  const port = 3001
  const listener = await app.listen(port);
  // console.log('running on port', listener)

}
bootstrap();
