import { Body, Controller, Get, Post, Req } from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
    constructor(private readonly usersService: UsersService) {}

    @Post('getUserByID')
    getUserByID(@Body() data) {
        console.log('getUserByID')
        console.log(data)
        return this.usersService.getUserByID(data.userID);
    }
    @Get()
    getUsers() {
        console.log('getting users')
        return this.usersService.getAllUsers();
    }
    @Get('getDriversList')
    getAllDrivers() {
      return this.usersService.getAllDrivers();
    }
    
    @Get('getClientsList')
    getAllClients() {
      return this.usersService.getAllClients();
    }    
  
}