import { Controller, Get, Post, Req } from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
    constructor(private readonly usersService: UsersService) {}

    @Get()
    getUser() {
        return 'user'
    }
    getAllClients
    @Get('getDrivers')
    findAll() {
      console.log('getting drivers')
      let drivers = this.usersService.getAllDrivers()
      console.log('drivers')
      console.log(drivers)
      return drivers;
    }
    
    
  
}