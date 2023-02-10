import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { DriverService } from 'src/driver/driver.service';
import { AuthService } from './auth.service';
import { LoginUserInput, VerifyUserOTPInput } from './dto/login-driver.dto';

@Controller('auth')
export class DriverController {
  constructor(private readonly driverService: DriverService) {}

  @Post('registerDriverPhone')
  create(@Body() createDriverDto: Create) {
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
 