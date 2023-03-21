import { OnGatewayConnection, OnGatewayDisconnect } from '@nestjs/websockets';
import { Server } from 'socket.io';
import { ParcelsService } from 'src/parcels/parcels.service';
import { UsersService } from 'src/users/users.service';
export declare class SocketsGateway implements OnGatewayConnection, OnGatewayDisconnect {
    private readonly parcelsService;
    private readonly usersService;
    constructor(parcelsService: ParcelsService, usersService: UsersService);
    sleep(ms: any): Promise<unknown>;
    server: Server;
    handleConnection(client: any): void;
    handleDisconnect(client: any): void;
    updateConnectedUserLocation(client: any, body: any): Promise<void>;
    handleParcelDeliveryRequest(client: any, body: any): Promise<any>;
    handleParcelDeliveryAccepted(client: any, body: any): Promise<import("../parcels/entities/order.entity").Order>;
    startPickupTrip(client: any, body: any): Promise<any>;
    startMyTimer(client: any, body: any): void;
    stopMyTimer(client: any): void;
}
