import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { DriverService } from './driver.service';
import { CreateDriverDto } from './dto/create-driver.dto';
import { LoginUserInput, VerifyUserOTPInput } from './dto/login-driver.dto';
import { UpdateDriverDTO } from './dto/update-driver.dto';

@Controller('driver')
export class DriverController {
  constructor(private readonly driverService: DriverService) {}

  @Get('getall')
  findAll() {
    clg
    return this.driverService.findAll();
  }


  @Get('getById')
  findOne(driverId: string) {
    return this.driverService.findOne(driverId)
  }
}
 