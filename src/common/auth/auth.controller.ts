import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { Token } from 'graphql';
import { CreateMobileUserDTO, CreateUserDTO } from 'src/users/dto/create-user.input';
import { GetMobileUserTokenDTO } from 'src/users/dto/logged-user.output';
import { LoginMobileUserDTO, LoginUserDTO } from 'src/users/dto/login-user.input';
import { AuthService } from './auth.service';


@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('registerByPhone')
  registerByPhone(@Body() createMobileUserDTO: CreateMobileUserDTO) {
    return this.authService.create(createMobileUserDTO);
  }

  @Post('loginByPhone')
  LoginByPhone(@Body() loginMobileUserDTO: LoginMobileUserDTO) {
    return this.authService.loginUserPhone(loginMobileUserDTO);
  }

  @Post('register')
  register(@Body() createUserDTO: CreateUserDTO) {
    return this.authService.register(createUserDTO);
  }
  @Post('login')
  Login(@Body() loginUserDTO: LoginUserDTO) {
    return this.authService.loginUser(loginUserDTO);
  }

  @Post('saveDriverApkLink')
  saveDriverApkLink(@Body() link) {
    return this.authService.saveDriverApkLink(link);
  }
  @Post('getUserByToken')
  GetUserByToken(@Body() access_token) {
    return this.authService.decodeUserToken(access_token.access_token);
  }

}
 