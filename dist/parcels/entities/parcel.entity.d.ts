import { Point } from 'geojson';
export declare class Parcel {
    packageID: string;
    packageOwnerID: string;
    packageDriverID: string;
    packageType: string;
    packageHeight: string;
    packageWidth: string;
    packageDepth: string;
    packageWeight: string;
    addressType: string;
    exactPickupAddress: string;
    exactDeliveryAddress: string;
    packageDeliveryFee: string;
    paymentMethod: string;
    packageDeliveryDistance: string;
    exactPickupCoordinates: Point;
    exactDeliveryCoordinates: Point;
}
