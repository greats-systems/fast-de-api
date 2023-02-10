import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { Token } from 'graphql';
import { CreateMobileUserDTO } from 'src/users/dto/create-user.input';
import { GetMobileUserTokenDTO } from 'src/users/dto/logged-user.output';
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
  GetUserByToken(@Body() access_token: GetMobileUserTokenDTO) {
    console.log('decodeUser Token token')
    console.log(access_token.access_token)
    let token : string = access_token.access_token
    return this.authService.decodeUserToken(token);
  }


}
 