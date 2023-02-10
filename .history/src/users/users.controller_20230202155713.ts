import { Controller, Get, Post, Req } from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
    constructor(private readonly usersService: UsersService) {}

    @Get()
    getUser() {
        console.log('getting users')
        let users = this.usersService.getAllUsers()
        console.log('users')
        console.log(users)
        return users;
    }
    
    @Get('getDrivers')
    getAllDrivers() {
      console.log('getting drivers')
      let drivers = this.usersService.getAllDrivers()
      console.log('drivers')
      console.log(drivers)
      return drivers;
    }
    
    @Get('getAllClients')
    getAllClients() {
      console.log('getting clients')
      let clients = this.usersService.getAllClients()
      console.log('clients')
      console.log(clients)
      return clients;
    }    
  
}