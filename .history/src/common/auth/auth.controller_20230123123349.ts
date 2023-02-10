import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { LoginUserInput } from 'src/client/dto/login-client.dto';
import { DriverService } from 'src/driver/driver.service';
import { CreateDriverDto } from 'src/driver/dto/create-driver.dto';
import { VerifyUserOTPInput } from 'src/driver/dto/login-driver.dto';
import { CreateMobileUserDTO } from 'src/users/dto/create-user.input';
import { LoginMobileUserDTO } from 'src/users/dto/login-user.input';
import { AuthService } from './auth.service';


@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('registerByPhone')
  create(@Body() createMobileUserDTO: CreateMobileUserDTO) {
    return this.authService.create(createMobileUserDTO);
  }

  @Post('loginByPhone')
  Login(@Body() loginMobileUserDTO: LoginMobileUserDTO) {
    return this.authService.verifyOTP(loginMobileUserDTO);
  }

  @Post('verifyOTP')
  loginDriverOTP(@Body() loginUserInput: LoginUserInput) {
    return this.authService.loginByPhone(loginUserInput);
  }

}
 