import { UsersService } from './users.service';
import { User } from './entities/user.entity';
import { CreateMobileUserDTO } from './dto/create-user.input';
import { UpdateUserInput } from './dto/update-user.input';
import { LoginUserDTO } from './dto/login-user.input';
import { UserProfileInput } from './dto/user-profile.input';
export declare class UsersResolver {
    private readonly usersService;
    constructor(usersService: UsersService);
    createUser(createMobileUserDTO: CreateMobileUserDTO): Promise<User>;
    findAll(): Promise<User[]>;
    findOne(userId: string): Promise<User>;
    getUserProfile(userProfileInput: UserProfileInput): Promise<User>;
    updateUser(updateUserInput: UpdateUserInput): Promise<User>;
    removeUser(userId: string): Promise<User>;
    loginUser(loginUserDTO: LoginUserDTO): Promise<{
        access_token: string;
    }>;
}
