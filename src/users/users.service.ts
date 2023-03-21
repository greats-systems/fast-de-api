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
import { LoginMobileUserDTO, LoginUserDTO } from './dto/login-user.input';
import { CreateMobileUserDTO, GatewayConnectedUserDTO } from './dto/create-user.input';
import { GatewayConnectedUser } from './entities/gateway.connected.user.entity';
import { Point, Geometry } from 'geojson'
@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
    @InjectRepository(GatewayConnectedUser)
    private readonly gatewayConnectedUserRepository: Repository<GatewayConnectedUser>,
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

  async createGatewayConnectedUser(gatewayConnectedUserDTO: GatewayConnectedUserDTO): Promise<GatewayConnectedUser> {
    const pointObject_orderDriverCoordinates :Point = {
      type: "Point",
      coordinates: [JSON.parse(gatewayConnectedUserDTO.location).longitude, JSON.parse(gatewayConnectedUserDTO.location).latitude]
    }
    gatewayConnectedUserDTO.location = pointObject_orderDriverCoordinates
    const userSchema = this.gatewayConnectedUserRepository.create(gatewayConnectedUserDTO);
    console.log('create gatewayConnectedUser', userSchema)
    try {
    const gatewayConnectedUser = await this.gatewayConnectedUserRepository.save(userSchema);
    return gatewayConnectedUser;
      
    } catch (error) {
      console.log(error)
      
    }
   
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

  async getGatewayConnectedUser(userId: string): Promise<GatewayConnectedUser> {
    const user = await this.gatewayConnectedUserRepository.findOne({
      where: { userId: userId },
    });
    if (!user) {
      let foundIdentity = await this.gatewayConnectedUserRepository.findOne({
        where: { userId: userId },
      });
      console.log('foundIdentity')
      console.log(foundIdentity)
      return null
    }
    return user;
  }
  async updateGatewayConnectedUserLocation(userLocation: {userId: string, latitude:number, longitude:number}): Promise<GatewayConnectedUser> {

   const user =  await this.getGatewayConnectedUser(userLocation.userId)
    const pointObject_location :Point = {
      type: "Point",
      coordinates: [userLocation.longitude, userLocation.latitude]
    }
    user.location = pointObject_location
    const gatewayConnectedUser = await this.gatewayConnectedUserRepository.save(user);
    return gatewayConnectedUser;
  }
  
  async getDriverByRadius(location: Point): Promise<GatewayConnectedUser>{
    console.log('${location.coordinates[0]}, ${location.coordinates[1]}')
    console.log(location)
    const drivers = await this.gatewayConnectedUserRepository.query(
      `SELECT * , ST_Distance('SRID=4326;POINT(${location.coordinates[0]} ${location.coordinates[1]})'::geometry, location) AS dist FROM gateway_connected_user  WHERE role='driver';`,
    );
    const driver = drivers[1]; 
    console.log('getDriverByRadius driver');
    console.log(driver);
    return driver
  }

  async getGatewayConnectedDriver(userId: string,): Promise<GatewayConnectedUser> {
    const user = await this.gatewayConnectedUserRepository.findOne({
      where: { userId: '5cb96dd9-0a44-4433-9b14-7756c317b85b', role: 'driver' },
    });
    if (!user) {
      let foundIdentity = await this.gatewayConnectedUserRepository.findOne({
        where: { userId: userId },
      });
      console.log('foundIdentity')
      console.log(foundIdentity)
      throw new NotFoundException(`Driver of id #${userId} not found`);
    }
    return user;
  }

  async loginUser(loginUserDTO: LoginUserDTO) {
    const user = await this.authService.validateUser(
      loginUserDTO.email,
      loginUserDTO.password
    );
    if (!user) {
      throw new BadRequestException(`email or password are invalid`);
    } else {
      return this.authService.generateUserCredentials(user);
    }
  }  


// CLIENT SERVICES
  async loginMobileUser(loginUserDTO: LoginMobileUserDTO) {
    const user = await this.authService.validateUser(
      loginUserDTO.phone,
      loginUserDTO.pin
    );
    if (!user) {
      throw new BadRequestException(`Phone or password are invalid`);
    } else {
      return this.authService.generateUserCredentials(user);
    }
  }

  async getAllClients(): Promise<Array<User>> {
    let clients = await this.userRepository.find({ where: { role: 'client' } })
    
    if(!clients) {
      throw new NotFoundException(`Clients not found`);
    }else{
      console.log('clients')
      console.log(clients)
    }
    return clients;
  }


// DRIVER SERVICES

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


  async getAllDrivers(): Promise<Array<User>> {
    let users = await this.userRepository.find({ where: { role: 'driver' } })
    if(!users) {
      throw new NotFoundException(`Drivers not found`);
    }else{
      console.log(users)
    }
    return users;
  }


  // GENERIC USERS SERVICE

  async getAllUsers(): Promise<Array<User>> {
    let users = await this.userRepository.find({ where: { role: 'admin' } })
    
    if(!users) {
      throw new NotFoundException(`Users not found`);
    }else{
      console.log(users)
    }
    return users;
  }



    // get all entity objects
    async findAll(): Promise<Array<User>> {
      return await this.userRepository.find();
    }
  
    async getUserByID(userId: string): Promise<User> {
      console.log('getUserByID userId')
      console.log(userId)

      const user = await this.userRepository.findOne({
        where: { userId: userId },
      });

      console.log('getUserByID user')
      console.log(user)
      // if (!user) {
      //   throw new NotFoundException(`User #${userId} not found`);
      // }
      if(user) {
        delete user.pin
        delete user.password
  
        return user;
      }
      return null

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
        console.log('decodedser', decodedser)

        user = await this.userRepository.findOne({
          where: { userId: decodedser.sub },
        });

      } else {
        throw new NotFoundException(`User token #${token} not valid`);
      }
  
      if (!user) {
        throw new NotFoundException(`User #${decodedser.sub} not found`);
      }

      return user;
    }



  
    async findOneByPhone(phone: string): Promise<User> {
      const user = await this.userRepository.findOne({ where: { phone: phone } });    
      if (!user || user === null) {
        throw new NotFoundException(`User #${phone} not found`);
      }
      return user;
    }
  
    async findOneByEmail(email: string): Promise<User> {
      const user = await this.userRepository.findOne({ where: { email: email } });    
      if (!user || user === null) {
        throw new NotFoundException(`User with ${email} not found`);
      }
      return user;
    }


  async remove(userId: string): Promise<User> {
    const user = await this.getUserByID(userId);
    await this.userRepository.remove(user);
    return {
      userId: userId,
      firstName: '',
      lastName: '',
      phone: '',
      password: '',
      email: '',
      pin:'',
      role: '',
      rides: [],
    };
  }
}
