import { Repository } from 'typeorm';
import { UpdateUserInput } from './dto/update-user.input';
import { User } from './entities/user.entity';
import { AuthService } from 'src/common/auth/auth.service';
import { LoginMobileUserDTO, LoginUserDTO } from './dto/login-user.input';
import { CreateMobileUserDTO, GatewayConnectedUserDTO } from './dto/create-user.input';
import { GatewayConnectedUser } from './entities/gateway.connected.user.entity';
import { Point } from 'geojson';
export declare class UsersService {
    private readonly userRepository;
    private readonly gatewayConnectedUserRepository;
    private readonly authService;
    constructor(userRepository: Repository<User>, gatewayConnectedUserRepository: Repository<GatewayConnectedUser>, authService: AuthService);
    create(createUserDTO: CreateMobileUserDTO): Promise<User>;
    createGatewayConnectedUser(gatewayConnectedUserDTO: GatewayConnectedUserDTO): Promise<GatewayConnectedUser>;
    update(userId: string, updateUserInput: UpdateUserInput): Promise<User>;
    getGatewayConnectedUser(userId: string): Promise<GatewayConnectedUser>;
    updateGatewayConnectedUserLocation(userLocation: {
        userId: string;
        latitude: number;
        longitude: number;
    }): Promise<GatewayConnectedUser>;
    getDriverByRadius(location: Point): Promise<GatewayConnectedUser>;
    getGatewayConnectedDriver(userId: string): Promise<GatewayConnectedUser>;
    loginUser(loginUserDTO: LoginUserDTO): Promise<{
        access_token: string;
    }>;
    loginMobileUser(loginUserDTO: LoginMobileUserDTO): Promise<{
        access_token: string;
    }>;
    getAllClients(): Promise<Array<User>>;
    getDrivers(userIds: Array<{}>): Promise<Array<User>>;
    getAllDrivers(): Promise<Array<User>>;
    getAllUsers(): Promise<Array<User>>;
    findAll(): Promise<Array<User>>;
    getUserByID(userId: string): Promise<User>;
    findOne(userId: string): Promise<User>;
    getUserProfile(token: string): Promise<User>;
    findOneByPhone(phone: string): Promise<User>;
    findOneByEmail(email: string): Promise<User>;
    remove(userId: string): Promise<User>;
}
