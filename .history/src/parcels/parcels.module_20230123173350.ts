import { Module } from '@nestjs/common';
import { ParcelsService } from './parcels.service';
import { ParcelsController } from './parcels.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Parcel } from './entities/parcel.entity';
import { UsersModule } from 'src/users/users.module';
import { NotificationsModule } from 'src/notifications/notifications.module';
import { UsersService } from 'src/users/users.service';
import { CommonModule } from 'src/common/common.module';

@Module({
  imports: [
    UsersModule,
    NotificationsModule,
    CommonModule,
    TypeOrmModule.forFeature([Parcel]),
  ],
  controllers: [ParcelsController],
  providers: [ParcelsService, UsersService],
  exports: [ParcelsService, TypeOrmModule],

})
export class ParcelsModule {}
