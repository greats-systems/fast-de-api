import { BadRequestException, forwardRef, Inject, Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { UsersService } from 'src/users/users.service';
import { CreateMobileUserDTO } from 'src/users/dto/create-user.input';
import { Repository } from 'typeorm/repository/Repository';
import { InjectRepository } from '@nestjs/typeorm';
import { LoginMobileUserDTO } from 'src/users/dto/login-user.input';
import { User } from 'src/users/entities/user.entity';
@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
    @Inject(forwardRef(() => UsersService))
    private readonly usersService: UsersService,
    private jwtTokenService: JwtService,
  ) {}

  async create(createMobileUserDTO: CreateMobileUserDTO) {
    const saltOrRounds = 10;
    const pin = createMobileUserDTO.pin;
    createMobileUserDTO.pin = await bcrypt.hash(pin, saltOrRounds);

    const userSchema = this.userRepository.create(createMobileUserDTO);
    console.log('userSchema ------');
    console.log(userSchema);
    const user = await this.userRepository.save(userSchema);
    console.log('new user')
    console.log(user)

    let loginData = {
      phone:createMobileUserDTO.phone,
      pin:pin,
    }
    console.log('newLogin')
    var newLogin = await this.loginUserPhone(loginData)
    console.log(newLogin)
    
    let response = {
      user,
      newLogin,
    }
    return response;
  }

  async loginUserPhone(loginUserInput: LoginMobileUserDTO) {
    console.log('logging user data')
    console.log(loginUserInput.phone)
    console.log(loginUserInput.pin)
    const user = await this.validateUser(
      loginUserInput.phone,
      loginUserInput.pin,
    );
    console.log('valid User ')
    console.log(user)

    if (!user) {
      console.log('Phone or password are invalid')
      throw new BadRequestException(`Phone or password are invalid`);
    } else {
      let loggedUser = await this.generateUserCredentials(user)
      console.log('loggedUser')
      console.log(loggedUser)
      return loggedUser;
    }
  }

  async validateUser(phone: string, pin: string): Promise<any> {
    console.log('getting User')
    const user = await this.usersService.findOneByPhone(phone);
    if (user) {
      console.log('User found')
      console.log(user)

      if (await bcrypt.compare(pin, user.pin)) {
        delete user.pin;
        return user;
      }
    }else{
      console.log('User not found')
    }
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

  async decodeUserToken(token: string): Promise<any> {
    console.log('=--------decoding User Token')
    const user = this.jwtTokenService.decode(token);
    console.log('decodeUserToken User')
    console.log(user)
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
}