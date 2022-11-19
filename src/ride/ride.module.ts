import { Module } from '@nestjs/common';
import { RideService } from './ride.service';
import { RideResolver } from './ride.resolver';
import { CommonModule } from 'src/common/common.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Ride } from './entities/ride.entity';
import { UsersService } from 'src/users/users.service';
import { UsersModule } from 'src/users/users.module';
import { NotificationsService } from 'src/notifications/notifications.service';
import { NotificationsModule } from 'src/notifications/notifications.module';
import { Destination, Origin } from './entities/coordinates.entity';

@Module({
  imports: [
    NotificationsModule,
    UsersModule,
    CommonModule,
    TypeOrmModule.forFeature([Ride, Origin, Destination]),
  ],
  providers: [
    RideResolver,
    RideService,
    UsersService,
    // ,NotificationsService
  ],
  exports: [RideService],
})
export class RideModule {}
