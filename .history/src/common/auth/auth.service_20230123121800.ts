import { forwardRef, Inject, Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from '../../users/users.service';
import { User } from '../../users/entities/user.entity';
import * as bcrypt from 'bcrypt';
import { Client } from 'src/client/entities/client.entity';
import { ClientService } from 'src/client/client.service';
import { DriverService } from 'src/driver/driver.service';
import { Driver } from 'src/driver/entities/driver.entity';
@Injectable()
export class AuthService {
  constructor(
    @Inject(forwardRef(() => UsersService))
    private readonly usersService: UsersService,
    private readonly clientService: ClientService,
    private readonly driverService: DriverService,
    private jwtTokenService: JwtService,
  ) {}

  async validateUser(phone: string, password: string): Promise<any> {
    const user = await this.usersService.findOneByPhone(phone);
    if (user) {
      if (await bcrypt.compare(password, user.password)) {
        delete user.password;
        return user;
      }
    }
    return null;
  }


  async validateClient(phone: string, pin: string): Promise<any> {
    const client = await this.clientService.findOneByPhone(phone);
    console.log('validated Client')
    console.log(client)
    
    if (client) {
      if (await bcrypt.compare(pin, client.pin)) {
        delete client.pin;
        console.log('returning validated Client')
        return client;
      }
    }
    console.log('returning null')

    return null;
  }

  async verifyUser(driverId: string, otp: string): Promise<any> {
    const user = await this.usersService.findOneByPhone(driverId);
    if (user) {
      if (await bcrypt.compare(otp, user.password)) {
        delete user.password;
        return user;
      }
    }
    return null;
  }

  async verifyClient(phone: string, pin: string): Promise<any> {
    const client = await this.clientService.findOneByPhone(phone);
    if (client) {
      if (await bcrypt.compare(pin, client.pin)) {
        delete client.pin;
        return client;
      }
    }
    return null;
  }
  async decodeUserToken(token: string): Promise<any> {
    const user = this.jwtTokenService.decode(token);
    if (user) {
      return user;
    }

    return null;
  }

  async generateUserCredentials(user: User) {
    const payload = {
      phone: user.phone,
      firstName: user.firstName,
      lastName: user.lastName,
      role: user.role,
      sub: user.userId,
    };

    return {
      access_token: this.jwtTokenService.sign(payload),
    };
  }




  async verifyDriver(driverId: string, otp: string): Promise<any> {
    const driver = await this.driverService.findOneByPhone(driverId);
    if (driver) {
      if (await bcrypt.compare(otp, driver.pin)) {
        delete driver.pin;
        return driver;
      }
    }
    return null;
  }

