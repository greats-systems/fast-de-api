import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ParcelsService } from './parcels.service';
import { CreateParcelDto } from './dto/create-parcel.dto';
import { UpdateParcelDto } from './dto/update-parcel.dto';
import { Client } from 'src/client/entities/client.entity';
import { Parcel } from './entities/parcel.entity';

@Controller('parcels')
export class ParcelsController {
  constructor(private readonly parcelsService: ParcelsService) {}

  @Post('createParcel')
  create(@Body() data): Promise<Parcel> {
    console.log('createParcel data')
    console.log(data.data)
    return this.parcelsService.create(data.data);
  }

  @Post('acceptreject')
  acceptReject(@Body() data): Promise<Parcel> {
    console.log('acceptreject data')
    console.log(data.data)
    return this.parcelsService.create(data.data);
  }

  @Get()
  findAll() {
    return this.parcelsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.parcelsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateParcelDto: UpdateParcelDto) {
    return this.parcelsService.updateParcel(+id, updateParcelDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.parcelsService.remove(+id);
  }
}