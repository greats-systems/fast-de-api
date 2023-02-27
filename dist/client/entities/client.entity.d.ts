import { Ride } from 'src/ride/entities/ride.entity';
export declare class Client {
    clientId: string;
    phone: string;
    firstName?: string;
    lastName?: string;
    pin: string;
    role: string;
    rides?: Ride[];
}
