import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ClientService } from './client.service';
import { CreateClientDto } from './dto/create-client.dto';
import { LoginUserInput, VerifyUserOTPInput } from './dto/login-client.dto';
import { UpdateClientDTO } from './dto/update-client.dto';

@Controller('client')
export class ClientController {
  constructor(private readonly clientService: ClientService) {}

  @Post('updateClientProfile')
  updateClientProfile(@Body() data) {
    return this.clientService.updateClientProfile(data);
  }

  @Get()
  findAll() {
    return this.clientService.findAll();
  }


}
