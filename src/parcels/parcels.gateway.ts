import {
  SubscribeMessage,
  WebSocketGateway,
  OnGatewayInit,
  WebSocketServer,
  OnGatewayDisconnect,
} from '@nestjs/websockets';
import { Socket, Server, } from 'socket.io';
import { Logger } from '@nestjs/common';
import { CreateParcelDto } from './dto/create-parcel.dto';
import { ParcelsService } from './parcels.service';

@WebSocketGateway()
export class ParcelsGateway implements
   OnGatewayInit, OnGatewayDisconnect{

  handleDisconnect(client: any) {
    console.log('handleDisconnect', client.id)
  }

  @WebSocketServer() wss: Server;


  private logger: Logger = new Logger('ParcelsGateway');

  afterInit(server: any) {
    this.logger.log('Initialized!');
  }
    @SubscribeMessage('connectDeviceToParcelDeliveryRequest')
    connectDevice(client: Socket, room: string) {
    console.log('connectDeviceToParcelDeliveryRequest', room)

    client.join('parcelDeliveryRequest');
    client.emit('deviceConnectedToParcelDeliveryRequest', 'deviceConnectedToParcelDeliveryRequest');
  }

  // Broadcast the parcel delivery request to nearest driver
  // @SubscribeMessage('parcelDeliveryRequest')
  // async handleParcelDeliveryRequest(client: Socket, parcels: CreateParcelDto) {
  //   client.join('parcelDeliveryRequest');

  //   let requestResolve = await this.parcelsService.createParcelDeliveryRequest(parcels)
  //   console.log('parcelDeliveryRequest Resolve', requestResolve)
  //   this.wss.to('parcelDeliveryRequest').emit('parcelDeliveryRequest', requestResolve);
  // }

  @SubscribeMessage('acceptedOrder')
  handleAcceptedOrder(
    client: Socket,
    message: { sender: string; room: string; message: string },
  ) {
    this.wss.to(message.room).emit('chatToClient', message);
  }

}
