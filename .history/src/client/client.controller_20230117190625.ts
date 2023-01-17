import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ClientService } from './client.service';
import { CreateClientDto } from './dto/create-client.dto';
import { LoginUserInput, VerifyUserOTPInput } from './dto/login-client.dto';
import { UpdateClientDTO } from './dto/update-client.dto';

@Controller('client')
export class ClientController {
  constructor(private readonly clientService: ClientService) {}

  @Post('registerClientPhone')
  create(@Body() createClientDto: CreateClientDto) {
    return this.clientService.create(createClientDto);
  }


  @Post('verifyClientOTP')
  verifyClientOTP(@Body() createClientDto: VerifyUserOTPInput) {
    return this.clientService.verifyClientOTP(createClientDto);
  }

  @Post('verifyClientOTP')
  loginClientOTP(@Body() loginUserInput: LoginUserInput) {
    return this.clientService.loginClientPhone(loginUserInput);
  }


  @Post('verifyClientOTP')
  loginClientOTP(@Body() loginUserInput: LoginUserInput) {
    return this.clientService.loginClientPhone(loginUserInput);
  }

  @Get()updateClientProfile
  findAll() {
    return this.clientService.findAll();
  }

  // @Get(':id')
  // findOne(@Param('id') id: string) {
  //   return this.clientService.findOne(+id);
  // }

  // @Patch(':id')
  // update(@Param('id') id: string, @Body() updateClientDto: UpdateClientDto) {
  //   return this.clientService.update(+id, updateClientDto);
  // }

  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.clientService.remove(+id);
  // }
}
