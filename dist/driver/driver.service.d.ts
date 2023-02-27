import { AuthService } from 'src/common/auth/auth.service';
import { Repository } from 'typeorm';
import { Driver } from './entities/driver.entity';
export declare class DriverService {
    private readonly driverRepository;
    private readonly authService;
    constructor(driverRepository: Repository<Driver>, authService: AuthService);
    findAll(): Promise<Array<Driver>>;
    findOne(driverId: string): Promise<Driver>;
    getDriverProfile(token: string): Promise<Driver>;
    findOneByPhone(phone: string): Promise<Driver>;
    getDrivers(role: string): Promise<Array<Driver>>;
    updateDriverProfile(data: any): Promise<Driver>;
    remove(driverId: string): Promise<Driver>;
}
