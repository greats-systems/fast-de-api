import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { LoginUserInput } from 'src/client/dto/login-client.dto';
import { DriverService } from 'src/driver/driver.service';
import { CreateDriverDto } from 'src/driver/dto/create-driver.dto';
import { VerifyUserOTPInput } from 'src/driver/dto/login-driver.dto';
import { AuthService } from './auth.service';


@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('registerByPhone')
  create(@Body() createDriverDto: Cre) {
    return this.authService.create(createDriverDto);
  }

  @Post('loginByPhone')
  Login(@Body() createDriverDto: VerifyUserOTPInput) {
    return this.authService.verifyOTP(createDriverDto);
  }

  @Post('verifyOTP')
  loginDriverOTP(@Body() loginUserInput: LoginUserInput) {
    return this.authService.loginByPhone(loginUserInput);
  }

}
 