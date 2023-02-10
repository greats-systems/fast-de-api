import { Module } from '@nestjs/common';
import { ParcelsService } from './parcels.service';
import { ParcelsController } from './parcels.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Parcel } from './entities/parcel.entity';

@Module({
  imports: [
    
    TypeOrmModule.forFeature([Parcel]),
  ],
  controllers: [ParcelsController],
  providers: [ParcelsService],
  exports: [ParcelsService, TypeOrmModule],

})
export class ParcelsModule {}
