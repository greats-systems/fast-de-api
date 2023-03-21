import { Point } from 'geojson';
export declare class GatewayConnectedUser {
    connectionId: string;
    userId: string;
    deviceId?: string;
    currentSocketID?: string;
    location?: Point;
    role: string;
    issuedTime: string;
    dist?: number;
}
