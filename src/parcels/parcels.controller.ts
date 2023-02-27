import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ParcelsService } from './parcels.service';
import { CreateParcelDto } from './dto/create-parcel.dto';
import { UpdateParcelDto } from './dto/update-parcel.dto';
import { Client } from 'src/client/entities/client.entity';
import { Parcel } from './entities/parcel.entity';

@Controller('parcels')
export class ParcelsController {
  constructor(
    private readonly parcelsService: ParcelsService
    
    ) {}

  @Post('createParcel')
  create(@Body() data): Promise<Parcel> {
    console.log('createParcel data')
    console.log(data.data)
    return this.parcelsService.create(data.data);
  }

  @Post('processOrder')
  acceptReject(@Body() data) {
    console.log('processOrder data')
    console.log(data)
    return this.parcelsService.processOrder(data.data);
  }

  @Post('runDelivery')
  runDelivery(@Body() data) {
    console.log('runDelivery data')
    console.log(data)
    return this.parcelsService.runDelivery(data.data.orderID, data.data.status );
  }

  
  @Post('getOrdersByUser')
  getOrdersByUser(@Body() data) {
    console.log('getOrdersByUser data')
    console.log(data)
    return this.parcelsService.getOrdersByUser(data.userID, data.userRole);
  }
  @Post('getOrdersHistory')
  getOrdersHistory(@Body() data) {
    console.log('getOrdersHistory data')
    console.log(data)
    return this.parcelsService.getOrdersHistory(data.userPhone);
  }
  
  @Get()
  findAll() {
    return this.parcelsService.findAll();
  }

  @Get('getAllOrders')
  getAllOrders() {
    console.log('getting orders')
    return this.parcelsService.getAllOrders();
  }  

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.parcelsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') packageID: string, @Body() updateParcelDto: UpdateParcelDto) {
    return this.parcelsService.updateParcel(packageID, updateParcelDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.parcelsService.remove(+id);
  }
}
