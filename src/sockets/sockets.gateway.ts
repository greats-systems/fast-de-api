import {
    ConnectedSocket,
    MessageBody,
    OnGatewayConnection,
    OnGatewayDisconnect,
    SubscribeMessage,
    WebSocketGateway,
    WebSocketServer,
  } from '@nestjs/websockets';
import { Console } from 'console';
  import { Server } from 'socket.io';
import { ParcelsService } from 'src/parcels/parcels.service';
import { UsersService } from 'src/users/users.service';
  import { TimerEvents } from './events';
  import {
      broadcastParcelDeliveryRequestToDriver,
    broadcastParcelDeliveryResolveToOrderOwner,
    getUserDeviceRoom,
    startTimerForUserDevice,
    stopTimerForUserDevice,
  } from './rooms';
  
  @WebSocketGateway()
  export class SocketsGateway
    implements OnGatewayConnection, OnGatewayDisconnect
  {
    constructor(
            private readonly parcelsService: ParcelsService, 
            private readonly usersService: UsersService

    ) {

    }

    async sleep(ms) {
      return new Promise(resolve => setTimeout(resolve, ms));
    }
    @WebSocketServer()
    public server: Server;
    handleConnection(@ConnectedSocket() client: any) {
      console.log(
        `user ${client.user.userId} with socket ${client.id} connected with device ${client?.user?.deviceId}`,
      );

      client.join(
        getUserDeviceRoom(
          client.user.userId,
          client?.user?.deviceId,
        ),
      );
    }

    handleDisconnect(@ConnectedSocket() client: any) {
      console.log(
        `user ${client.user.userId} with socket ${client.id} with device ${client?.user?.deviceId} DISCONNECTED`,
      );

      client.leave(
        getUserDeviceRoom(
          client.user.userId,
          client?.user?.deviceId,
        ),
      );
    }
    
    @SubscribeMessage('updateUserLocation')
    async updateConnectedUserLocation(@ConnectedSocket() client: any, @MessageBody() body: any): Promise<void> {
        // update location
        console.log('updateConnectedUserLocation body', body.coords)

    await this.usersService.updateGatewayConnectedUserLocation({
        userId:client.user.userId, 
        latitude: body.coords.latitude,
        longitude: body.coords.longitude
    })
    }

    @SubscribeMessage('parcelDeliveryRequest')
    async handleParcelDeliveryRequest(@ConnectedSocket() client: any, @MessageBody() body: any): Promise<any> {
        //   create the requast record
        console.log('parcelDeliveryRequest body')
        console.log(body)
        let newParcelDeliveryRequest = await this.parcelsService.createParcelDeliveryRequest(body)
        if(newParcelDeliveryRequest) {
            // get the driver based on being connected active room and nearest distance from client
            // let gatewayConnectedUser =  await this.usersService.getGatewayConnectedDriver(client.user.userId)
            let gatewayConnectedUser = await this.usersService.getDriverByRadius(newParcelDeliveryRequest.exactPickupCoordinates)
            broadcastParcelDeliveryRequestToDriver(
                this.server,
                gatewayConnectedUser.userId,
                gatewayConnectedUser?.deviceId,
                newParcelDeliveryRequest, // Timer duration
            )
        }
    }

    @SubscribeMessage('parcelDeliveryAccepted')
    async handleParcelDeliveryAccepted(@ConnectedSocket() client: any, @MessageBody() body: any) {
        //   create the requast record
        let processedOrder = await this.parcelsService.processOrder(body)

        if(processedOrder){
          // notify the driver
          console.log('Notify driver of processed Order ', processedOrder)
          this.server.emit('responseParcelDeliveryRequest', {data: processedOrder});
          
          // get the user based on being connected active room and nearest distance from client
          let gatewayConnectedUser =  await this.usersService.getGatewayConnectedUser(processedOrder.orderOwnerID )
          
          // get the user based on being connected active room and nearest distance from client
          console.log('Notify Client of processed Order ', processedOrder)
          
          await this.sleep(5000).then(() => 
          console.log('I waited 5 seconds')
          )
          broadcastParcelDeliveryResolveToOrderOwner(
            this.server,
            gatewayConnectedUser.userId,
            gatewayConnectedUser?.deviceId,
            processedOrder, // Timer duration
        )
        }else{
          this.server.emit('responseParcelDeliveryRequest', {error: 'error processing order'});
        }
        return processedOrder
    }

    @SubscribeMessage('startPickupTrip')
    async startPickupTrip(@ConnectedSocket() client: any, @MessageBody() body: any): Promise<any> {
        //   create the requast record
        console.log('startPickupTrip body')
        console.log(body)
        let runPickupTrip = await this.parcelsService.startPickupTrip(body.orderID, body.driverCoordinates)
        if(runPickupTrip) {
            // get the user based on being connected active room and nearest distance from client
            // let gatewayConnectedUser =  await this.usersService.getGatewayConnectedDriver(client.user.userId)
            let gatewayConnectedUser = await this.usersService.getGatewayConnectedUser(runPickupTrip.orderOwnerID)
            broadcastParcelDeliveryRequestToDriver(
                this.server,
                gatewayConnectedUser.userId,
                gatewayConnectedUser?.deviceId,
                runPickupTrip, // Timer duration
            )
            return this.server.emit('responseParcelDeliveryRequest', {data: runPickupTrip});
        }else{
          return this.server.emit('responseParcelDeliveryRequest', {error: 'error processing order'});
          
        }
    }    
    @SubscribeMessage(TimerEvents.timerStart.toString())
    startMyTimer(@ConnectedSocket() client: any, @MessageBody() body: any): void {
      // Stop any existing timer for this user device.
      stopTimerForUserDevice(
        client.user.userId,
        client?.user?.deviceId,
      );
  
      // Start a new timer for this user device.
      startTimerForUserDevice(
        this.server,
        client.user.userId,
        client?.user?.deviceId,
        body.dur, // Timer duration
      );
    }
  
    @SubscribeMessage(TimerEvents.timerStop.toString())
    stopMyTimer(@ConnectedSocket() client: any): void {
      // Stop current timer for this user device.
      stopTimerForUserDevice(
        client.user.userId,
        client?.user?.deviceId,
      );
    }
  }