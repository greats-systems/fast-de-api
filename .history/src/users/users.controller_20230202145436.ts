import { Controller, Get, Post, Req } from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {

    @Get()
    getUser() {
        return 'user'
    }

    @Get('getall')
    findAll() {
      console.log('getting drivers')
      let drivers = this.driverService.findAll()
      console.log('drivers')
      console.log(drivers)
      return drivers;
    }
  
}