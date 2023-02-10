import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
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
    return this.authService.loginUserPhone(loginMobileUserDTO);
  }

  @Post('getUserByToken')
  GetUserByToken(@Body() loginMobileUserDTO: LoginMobileUserDTO) {
    return this.authService.loginUserPhone(loginMobileUserDTO);
  }


}
 