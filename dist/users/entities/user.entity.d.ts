import { Ride } from 'src/ride/entities/ride.entity';
export declare class User {
    userId: string;
    firstName?: string;
    lastName?: string;
    phone: string;
    password?: string;
    email?: string;
    pin?: string;
    role: string;
    rides?: Ride[];
}
