import { Ride } from './ride.entity';
export declare class Location {
    locationID: string;
    ride: Ride;
    latitude: number;
    longitude: number;
    address: string;
    category: string;
}
export declare class LocationInput {
    ride: Ride;
    latitude: number;
    longitude: number;
    address: string;
    category: string;
}
export declare class Coordinates {
    latitude: number;
    longitude: number;
    address: string;
}
export declare class Origin {
    locationID: string;
    ride: Ride;
    latitude: number;
    longitude: number;
    address: string;
}
export declare class Destination {
    locationID: string;
    ride: Ride;
    latitude: number;
    longitude: number;
    address: string;
}
export declare class OriginInput {
    ride: Ride;
    latitude: number;
    longitude: number;
    address: string;
}
export declare class DestinationInput {
    ride: Ride;
    latitude: number;
    longitude: number;
    address: string;
}
