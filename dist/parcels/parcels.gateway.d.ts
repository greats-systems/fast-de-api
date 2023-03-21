import { OnGatewayInit, OnGatewayDisconnect } from '@nestjs/websockets';
import { Socket, Server } from 'socket.io';
export declare class ParcelsGateway implements OnGatewayInit, OnGatewayDisconnect {
    handleDisconnect(client: any): void;
    wss: Server;
    private logger;
    afterInit(server: any): void;
    connectDevice(client: Socket, room: string): void;
    handleAcceptedOrder(client: Socket, message: {
        sender: string;
        room: string;
        message: string;
    }): void;
}
