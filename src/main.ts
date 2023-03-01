import { NestFactory } from '@nestjs/core';
import { IoAdapter } from '@nestjs/platform-socket.io';
import { NestExpressApplication } from '@nestjs/platform-express';

import { join } from 'path';
import { ServerOptions } from 'socket.io';
import { AppModule } from './app.module';



export class SocketAdapter extends IoAdapter {
  createIOServer(
    port: number,
    options?: ServerOptions & {
      namespace?: string;
      server?: any;
    },
  ) {
    const server = super.createIOServer(port, {
      ...options,
      cors: {
        origin: '*',
        methods: ['GET', 'POST'],
      },
    });
    return server;
  }
}
async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  const port = 3001
  app.useStaticAssets(join(__dirname, '..', 'static'));
  app.enableCors({
    origin: 'http://localhost:3000',
  });
  app.useWebSocketAdapter(new SocketAdapter(app));
  await app.listen(port);
  // console.log('running on port', listener)

}
bootstrap();
