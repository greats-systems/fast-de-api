import { JwtService } from '@nestjs/jwt';
import { UsersService } from 'src/users/users.service';
import { CreateMobileUserDTO, CreateUserDTO } from 'src/users/dto/create-user.input';
import { Repository } from 'typeorm/repository/Repository';
import { LoginMobileUserDTO, LoginUserDTO } from 'src/users/dto/login-user.input';
import { User } from 'src/users/entities/user.entity';
export declare class AuthService {
    private readonly userRepository;
    private readonly usersService;
    private jwtTokenService;
    constructor(userRepository: Repository<User>, usersService: UsersService, jwtTokenService: JwtService);
    saveDriverApkLink(link: string): Promise<string>;
    create(createMobileUserDTO: CreateMobileUserDTO): Promise<{
        user: User;
        newLogin: {
            status: number;
            data: any;
            err: string;
        } | {
            status: number;
            data: {
                access_token: string;
            };
            err: any;
        };
    }>;
    register(createUserDTO: CreateUserDTO): Promise<User>;
    loginUser(loginUserInput: LoginUserDTO): Promise<{
        status: number;
        data: any;
        err: string;
    } | {
        status: number;
        data: {
            token: {
                access_token: string;
            };
            user: any;
        };
        err: any;
    }>;
    loginUserPhone(loginUserInput: LoginMobileUserDTO): Promise<{
        status: number;
        data: any;
        err: string;
    } | {
        status: number;
        data: {
            access_token: string;
        };
        err: any;
    }>;
    validateMobileUser(phone: string, pin: string): Promise<any>;
    validateUser(email: string, password: string): Promise<any>;
    decodeUserToken(token: string): Promise<any>;
    generateUserCredentials(user: User): Promise<{
        access_token: string;
    }>;
}
