import { CreateMobileUserDTO, CreateUserDTO } from 'src/users/dto/create-user.input';
import { LoginMobileUserDTO, LoginUserDTO } from 'src/users/dto/login-user.input';
import { AuthService } from './auth.service';
export declare class AuthController {
    private readonly authService;
    constructor(authService: AuthService);
    registerByPhone(createMobileUserDTO: CreateMobileUserDTO): Promise<{
        user: import("../../users/entities/user.entity").User;
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
    LoginByPhone(loginMobileUserDTO: LoginMobileUserDTO): Promise<{
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
    register(createUserDTO: CreateUserDTO): Promise<import("../../users/entities/user.entity").User>;
    Login(loginUserDTO: LoginUserDTO): Promise<{
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
    GetUserByToken(access_token: any): Promise<any>;
}
