import { Repository } from 'typeorm';
import { UpdateUserInput } from './dto/update-user.input';
import { User } from './entities/user.entity';
import { AuthService } from 'src/common/auth/auth.service';
import { LoginMobileUserDTO, LoginUserDTO } from './dto/login-user.input';
import { CreateMobileUserDTO } from './dto/create-user.input';
export declare class UsersService {
    private readonly userRepository;
    private readonly authService;
    constructor(userRepository: Repository<User>, authService: AuthService);
    create(createUserDTO: CreateMobileUserDTO): Promise<User>;
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
    update(userId: string, updateUserInput: UpdateUserInput): Promise<User>;
    findAll(): Promise<Array<User>>;
    getUserByID(userId: string): Promise<User>;
    findOne(userId: string): Promise<User>;
    getUserProfile(token: string): Promise<User>;
    findOneByPhone(phone: string): Promise<User>;
    findOneByEmail(email: string): Promise<User>;
    remove(userId: string): Promise<User>;
}
