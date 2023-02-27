import { UsersService } from './users.service';
export declare class UsersController {
    private readonly usersService;
    constructor(usersService: UsersService);
    getUserByID(data: any): Promise<import("./entities/user.entity").User>;
    getUsers(): Promise<import("./entities/user.entity").User[]>;
    getAllDrivers(): Promise<import("./entities/user.entity").User[]>;
    getAllClients(): Promise<import("./entities/user.entity").User[]>;
}
