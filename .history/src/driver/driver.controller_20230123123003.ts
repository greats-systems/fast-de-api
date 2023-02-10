import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { DriverService } from './driver.service';
import { CreateDriverDto } from './dto/create-driver.dto';
import { LoginUserInput, VerifyUserOTPInput } from './dto/login-driver.dto';
import { UpdateDriverDTO } from './dto/update-driver.dto';

@Controller('driver')
export class DriverController {
  constructor(private readonly driverService: DriverService) {}

  @Get()
  findAll() {
    return this.driverService.findAll();
  }


}
 