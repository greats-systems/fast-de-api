import { DriverService } from './driver.service';
export declare class DriverController {
    private readonly driverService;
    constructor(driverService: DriverService);
    findAll(): Promise<import("./entities/driver.entity").Driver[]>;
    findOne(driverId: string): Promise<import("./entities/driver.entity").Driver>;
}
