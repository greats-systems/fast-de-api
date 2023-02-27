import { NotificationsService } from 'src/notifications/notifications.service';
import { UsersService } from 'src/users/users.service';
import { Repository } from 'typeorm';
import { AcceptRideInput, CreateRideInput } from './dto/create-ride.input';
import { UpdateRideInput } from './dto/update-ride.input';
import { Ride } from './entities/ride.entity';
import { Trip } from './entities/trip.entity';
export declare class RideService {
    private rideRepository;
    private tripRepository;
    private readonly userService;
    private readonly notificationsService;
    constructor(rideRepository: Repository<Ride>, tripRepository: Repository<Trip>, userService: UsersService, notificationsService: NotificationsService);
    newRideRequest(): AsyncIterator<unknown, any, undefined>;
    createRide(createRideInput: CreateRideInput): Promise<CreateRideInput & Ride>;
    driverAcceptRideRequest(acceptRideInput: AcceptRideInput): Promise<AcceptRideInput & Trip>;
    findAll(): Promise<Ride[]>;
    findOne(rideID: string): Promise<Ride>;
    update(rideID: string, updateRideInput: UpdateRideInput): Promise<Ride>;
    remove(rideID: string): Promise<void>;
    getCustomer(customerId: string): Promise<import("../users/entities/user.entity").User>;
}
