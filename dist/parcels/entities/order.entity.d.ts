import { Point } from 'geojson';
export declare class Order {
    orderID: string;
    orderParcelID: string;
    orderDate: string;
    orderType: string;
    orderPaymentMethod: string;
    orderPaymentStatus: string;
    orderCountry: string;
    orderDriverID: string;
    orderDriverFirstName: string;
    orderDriverLastName: string;
    orderDriverCoordinates: Point;
    orderOwnerID: string;
    orderOwnerFirstName: string;
    orderOwnerLastName: string;
    orderPickupTime: string;
    orderPickupDistance: string;
    orderPickupAddress: string;
    orderPickupCoordinates: Point;
    orderStatus: string;
    orderDeliveryCoordinates: Point;
    orderDeliveryDistance: string;
    orderDeliveryAddress: string;
    orderDeliveryFee: string;
}
