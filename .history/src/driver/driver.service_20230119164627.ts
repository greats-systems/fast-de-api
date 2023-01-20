import { BadRequestException, forwardRef, Inject, Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { AuthService } from 'src/common/auth/auth.service';
import { Repository } from 'typeorm';
import { CreateDriverDto } from './dto/create-driver.dto';
import { LoginUserInput, VerifyUserOTPInput } from './dto/login-driver.dto';
import { Driver } from './entities/driver.entity';
import * as bcrypt from 'bcrypt';


@Injectable()
export class DriverService {
  constructor(
    @InjectRepository(Driver)
    private readonly driverRepository: Repository<Driver>,
    @Inject(forwardRef(() => AuthService))
    private readonly authService: AuthService,
    ) {}

  async create(createDriverDto: CreateDriverDto) {
    const saltOrRounds = 10;
    const pin = createDriverDto.pin;
    createDriverDto.pin = await bcrypt.hash(pin, saltOrRounds);

    const driverSchema = this.driverRepository.create(createDriverDto);
    console.log('driverSchema ------');
    console.log(driverSchema);
    const driver = await this.driverRepository.save(driverSchema);
    console.log('new driver')
    console.log(driver)

    let loginData = {
      phone:createDriverDto.phone,
      pin:pin,
    }
    console.log('newLogin')
    var newLogin = await this.loginDriverPhone(loginData)
    console.log(newLogin)
    
    let response = {
      driver,
      newLogin,
    }
    return response;
  }

  async loginDriverPhone(loginUserInput: LoginUserInput) {
    console.log('logging user data')
    console.log(loginUserInput.phone)
    console.log(loginUserInput.pin)
    const user = await this.authService.validateDriver(
      loginUserInput.phone,
      loginUserInput.pin,
    );
    console.log('valid Driver ')
    console.log(user)

    if (!user) {
      console.log('Phone or password are invalid')
      throw new BadRequestException(`Phone or password are invalid`);
    } else {
      let loggedDriver = await this.authService.generateDriverCredentials(user)
      console.log('loggedDriver')
      console.log(loggedDriver)
      return loggedDriver;
    }
  }

  async verifyDriverOTP(verifyDriverOTPInput: VerifyUserOTPInput) {
    const driver = await this.authService.verifyUser(
      verifyDriverOTPInput.driver_id,
      verifyDriverOTPInput.otp,
    );
    if (!driver) {
      throw new BadRequestException(`otp is invalid`);
    } else {
      return this.authService.generateDriverCredentials(driver);
    }
  }
  // get all entity objects
  async findAll(): Promise<Array<Driver>> {
    return await this.driverRepository.find();
  }


  async findOne(driverId: string): Promise<Driver> {
    const driver = await this.driverRepository.findOne({
      where: { driverId: driverId },
    });
    if (!driver) {
      throw new NotFoundException(`Driver #${driverId} not found`);
    }
    return driver;
  }

  async getDriverProfile(token: string): Promise<Driver> {
    const decodedser = await this.authService.decodeUserToken(token);
    let driver;
    if (decodedser) {
      driver = await this.driverRepository.findOne({
        where: { driverId: decodedser.sub },
      });
      console.log('getDriverProfile');
      console.log(decodedser.sub);
    } else {
      throw new NotFoundException(`Driver token #${token} not valid`);
    }

    if (!driver) {
      throw new NotFoundException(`Driver #${decodedser.sub} not found`);
    }
    return driver;
  }

  async findOneByPhone(phone: string): Promise<Driver> {
    const driver = await this.driverRepository.findOne({ where: { phone: phone } });
    
    if (!driver) {  
      throw new NotFoundException(`Driver #${phone} not found`);
    }
    return driver;
  }
  async getDrivers(role: string): Promise<Array<Driver>> {
    const drivers = await this.driverRepository.find({ where: { role: role } });
    if (!drivers) {
      throw new NotFoundException(`Drivers ${role} not found`);
    }
    return drivers;
  }

  async updateDriverProfile(data): Promise<Driver> {
    console.log('updateDriverProfile data')
    console.log(data)
    let driverId = data.driverId
    let updateDriverInput = data.data
    console.log('updateDriverProfile driverId')
    const driver = await this.driverRepository.preload({
      driverId: driverId,
      ...updateDriverInput,
    });


    if (!driver) {
      throw new NotFoundException(`Driver #${driverId} not found`);
    }
    let update =  await this.driverRepository.save(driver)
    console.log('success updated Driver Profile')
    console.log(update)
    return update;
  }

  async remove(driverId: string): Promise<Driver> {
    const driver = await this.findOne(driverId);
    await this.driverRepository.remove(driver);
    return {
      driverId: driverId,
      phone: '',
      pin: '',
      firstName: '',
      lastName: '',
      role: '',
      rides: [],
    };
  }
}
