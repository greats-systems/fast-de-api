import { Driver } from 'src/driver/entities/driver.entity';
import { User } from 'src/users/entities/user.entity';
import { Destination, Origin } from './coordinates.entity';
export declare class Ride {
    rideID: string;
    customerId: string;
    customer: User;
    driver: Driver;
    amount: string;
    rideType: string;
    distance: string;
    estimatedDuration: string;
    origin: Origin;
    destination: Destination;
}
