import {
  BadRequestException,
  forwardRef,
  Inject,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UpdateUserInput } from './dto/update-user.input';
import { User } from './entities/user.entity';
import * as bcrypt from 'bcrypt';
import { AuthService } from 'src/common/auth/auth.service';
import { LoginMobileUserDTO } from './dto/login-user.input';
import { CreateMobileUserDTO } from './dto/create-user.input';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
    @Inject(forwardRef(() => AuthService))
    private readonly authService: AuthService,
  ) {}

  // create an entity object in db
  async create(createUserDTO: CreateMobileUserDTO): Promise<User> {
    const saltOrRounds = 10;
    const password = createUserDTO.pin;
    createUserDTO.pin = await bcrypt.hash(password, saltOrRounds);
    const userSchema = this.userRepository.create(createUserDTO);
    const user = await this.userRepository.save(userSchema);
    console.log(user);
    return user;
  }

  async loginUser(loginUserDTO: LoginMobileUserDTO) {
    const user = await this.authService.validateUser(
      loginUserDTO.phone,
      loginUserDTO.pin,
      loginUserDTO.app,
    );
    if (!user) {
      throw new BadRequestException(`Phone or password are invalid`);
    } else {
      return this.authService.generateUserCredentials(user);
    }
  }
  // get all entity objects
  async findAll(): Promise<Array<User>> {
    return await this.userRepository.find();
  }

  async findOne(userId: string): Promise<User> {
    const user = await this.userRepository.findOne({
      where: { userId: userId },
    });
    if (!user) {
      throw new NotFoundException(`User #${userId} not found`);
    }
    return user;
  }

  async getUserProfile(token: string): Promise<User> {
    const decodedser = await this.authService.decodeUserToken(token);
    let user;
    if (decodedser) {
      user = await this.userRepository.findOne({
        where: { userId: decodedser.sub },
      });
      console.log('getUserProfile');
      console.log(decodedser.sub);
    } else {
      throw new NotFoundException(`User token #${token} not valid`);
    }

    if (!user) {
      throw new NotFoundException(`User #${decodedser.sub} not found`);
    }
    return user;
  }

  async findOneByPhone(phone: string, app: string): Promise<User> {
    console.log('User app')
    console.log(phone)
    console.log(app)

    const user = await this.userRepository.findOne({ where: { phone: phone } });    
    console.log('user')
    console.log(user)

    if (!user || user === null) {
      console.log(`User #${phone} not found`)
      let resp = {
        "status": 403,
        "error": "`Client of #${phone} not found`"
      };
    }
    if (user && user.role !== nulal) {
      console.log(`User #${phone} not found`)
      let resp = {
        "status": 403,
        "error": "`Client of #${phone} not found`"
      };
    }
    return user;
  }
  async getDrivers(userIds: Array<{}>): Promise<Array<User>> {
    console.log('userIds')
    console.log(userIds.length)
    let users:Array<User>
    if(userIds.length < 1){
      users = await this.userRepository
      .createQueryBuilder("user")
      .where("user.role = 'driver' AND user.userId NOT IN (:...userIds)", { userIds: userIds })
      .getMany();
    }else(
      users = await this.userRepository.find({ where: { role: 'driver' } })
    )
    if (!users) {
      throw new NotFoundException(`Drivers not found`);
    }
    return users;
  }

  async update(
    userId: string,
    updateUserInput: UpdateUserInput,
  ): Promise<User> {
    const user = await this.userRepository.preload({
      userId: userId,
      ...updateUserInput,
    });

    if (!user) {
      throw new NotFoundException(`User #${userId} not found`);
    }
    return this.userRepository.save(user);
  }

  async remove(userId: string): Promise<User> {
    const user = await this.findOne(userId);
    await this.userRepository.remove(user);
    return {
      userId: userId,
      firstName: '',
      lastName: '',
      phone: '',
      password: '',
      pin:'',
      role: '',
      rides: [],
    };
  }
}
