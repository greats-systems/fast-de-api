import { Server } from 'socket.io';
import { Order } from 'src/parcels/entities/order.entity';
import { Parcel } from 'src/parcels/entities/parcel.entity';
export declare function getUserDeviceRoom(userId: string, deviceId: string): string;
export declare function sendToUserDevice(server: Server, userId: string, deviceId: string, event: string, payload: any): void;
export declare function broadcastParcelDeliveryRequestToDriver(server: Server, userId: string, deviceId: string, parcelDeliveryRequest: Parcel): void;
export declare function broadcastParcelDeliveryResolveToOrderOwner(server: Server, userId: string, deviceId: string, parcelDeliveryResolve: Order): void;
export declare function startTimerForUserDevice(server: Server, userId: string, deviceId: string, dur: number): void;
export declare function stopTimerForUserDevice(userId: string, deviceId: string): void;
