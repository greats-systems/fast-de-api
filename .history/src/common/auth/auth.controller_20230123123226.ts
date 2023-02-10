import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { LoginUserInput } from 'src/client/dto/login-client.dto';
import { DriverService } from 'src/driver/driver.service';
import { CreateDriverDto } from 'src/driver/dto/create-driver.dto';
import { VerifyUserOTPInput } from 'src/driver/dto/login-driver.dto';
import { AuthService } from './auth.service';


@Controller('auth')
export class AuthController {
  constructor(private readonly driverService: AuthService) {}

  @Post('registerByPhone')
  create(@Body() createDriverDto: CreateDriverDto) {
    return this.driverService.create(createDriverDto);
  }

  @Post('loginByPhone')
  Login(@Body() createDriverDto: VerifyUserOTPInput) {
    return this.driverService.verifyDriverOTP(createDriverDto);
  }

  @Post('verifyOTP')
  loginDriverOTP(@Body() loginUserInput: LoginUserInput) {
    return this.driverService.loginDriverPhone(loginUserInput);
  }

}
 