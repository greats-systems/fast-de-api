import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { LoginUserInput } from 'src/client/dto/login-client.dto';
import { DriverService } from 'src/driver/driver.service';
import { CreateDriverDto } from 'src/driver/dto/create-driver.dto';
import { VerifyUserOTPInput } from 'src/driver/dto/login-driver.dto';
import { AuthService } from './auth.service';


@Controller('auth')
export class AuthController {
  constructor(private readonly driverService: DriverService) {}

  @Post('registerDriverPhone')
  create(@Body() createDriverDto: CreateDriverDto) {
    return this.driverService.create(createDriverDto);
  }


  @Post('verifyDriverOTP')
  verifyDriverOTP(@Body() createDriverDto: VerifyUserOTPInput) {
    return this.driverService.verifyDriverOTP(createDriverDto);
  }

  @Post('verifyDriverOTP')
  loginDriverOTP(@Body() loginUserInput: LoginUserInput) {
    return this.driverService.loginDriverPhone(loginUserInput);
  }


}
 