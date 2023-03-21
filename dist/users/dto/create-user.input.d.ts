import { Point } from 'geojson';
export declare class CreateMobileUserDTO {
    phone: string;
    pin: string;
    role: string;
    app: string;
}
export declare class CreateUserDTO {
    firstName?: string;
    lastName?: string;
    phone: string;
    email?: string;
    password: string;
    role: string;
}
export declare class GatewayConnectedUserDTO {
    userId?: string;
    deviceId?: string;
    currentSocketID?: string;
    location?: Point;
    role?: string;
    issuedTime?: string;
    dist?: number;
}
