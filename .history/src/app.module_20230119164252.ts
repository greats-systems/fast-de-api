import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { AuthService } from './common/auth/auth.service';
import * as dotenv from 'dotenv';
import { CommonModule } from './common/common.module';
import { JwtService } from '@nestjs/jwt';
import { RideModule } from './ride/ride.module';
import { NotificationsModule } from './notifications/notifications.module';
import { ClientModule } from './client/client.module';
import { ClientService } from './client/client.service';
import { ParcelsModule } from './parcels/parcels.module';
import { ParcelsService } from './parcels/parcels.service';
dotenv.config();

@Module({
  imports: [CommonModule, UsersModule, RideModule, NotificationsModule, ClientModule, DriverM ParcelsModule],
  controllers: [AppController],
  providers: [AppService, JwtService,ClientService, AuthService, ParcelsService],
})
export class AppModule {}
