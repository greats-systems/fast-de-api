import { User } from 'src/users/entities/user.entity';
import { Location } from './coordinates.entity';
import { Ride } from './ride.entity';
export declare class Trip {
    rideServiceID: string;
    rideId: string;
    distance: string;
    estimatedDuration: string;
    ride_request: Ride;
    customer: User;
    driver: User;
    driver_origin: Location;
    customer_origin: Location;
}
