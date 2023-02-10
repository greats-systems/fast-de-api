import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { DriverService } from 'src/driver/driver.service';
import { CreateDriverDto } from 'src/driver/dto/create-driver.dto';
import { AuthService } from './auth.service';


@Controller('auth')
export class DriverController {
  constructor(private readonly driverService: DriverService) {}

  @Post('registerDriverPhone')
  create(@Body() createDriverDto: CreateDriverDto) {
    return this.driverService.create(createDriverDto);
  }


  @Post('verifyDriverOTP')
  verifyDriverOTP(@Body() createDriverDto: Verify) {
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
 