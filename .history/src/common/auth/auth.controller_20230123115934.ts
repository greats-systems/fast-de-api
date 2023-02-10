import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginUserInput, VerifyUserOTPInput } from './dto/login-driver.dto';
import { UpdateDriverDTO } from './dto/update-driver.dto';

@Controller('auth')
export class DriverController {
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


  @Post('updateDriverProfile')
  updateDriverProfile(@Body() data) {
    return this.driverService.updateDriverProfile(data);
  }

  @Get()
  findAll() {
    return this.driverService.findAll();
  }


}
 