import { DestinationInput, LocationInput, OriginInput } from '../entities/coordinates.entity';
export declare class CreateRideInput {
    customerId: string;
    amount: string;
    rideType: string;
    distance: string;
    estimatedDuration: string;
    origin: OriginInput;
    destination: DestinationInput;
}
export declare class AcceptRideInput {
    rideId: string;
    driverId: string;
    customerId: string;
    distance: string;
    estimatedDuration: string;
    driver_origin: LocationInput;
    customer_origin: LocationInput;
}
