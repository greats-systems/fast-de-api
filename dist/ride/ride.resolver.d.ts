import { RideService } from './ride.service';
import { Ride } from './entities/ride.entity';
import { AcceptRideInput, CreateRideInput } from './dto/create-ride.input';
import { UpdateRideInput } from './dto/update-ride.input';
import { User } from 'src/users/entities/user.entity';
import { Trip } from './entities/trip.entity';
export declare class RideResolver {
    private readonly rideService;
    constructor(rideService: RideService);
    createRide(createRideInput: CreateRideInput, req: any): Promise<CreateRideInput & Ride>;
    acceptRide(acceptRideInput: AcceptRideInput, req: any): Promise<AcceptRideInput & Trip>;
    findAll(): Promise<Ride[]>;
    findOne(rideID: string): Promise<Ride>;
    customer(ride: Ride): Promise<User>;
    updateRide(updateRideInput: UpdateRideInput): Promise<Ride>;
    removeRide(rideID: string): Promise<void>;
}
