import { forwardRef, Inject, Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { AuthService } from 'src/common/auth/auth.service';
import { UpdateDriverDTO } from 'src/driver/dto/update-driver.dto';
import { NotificationsService } from 'src/notifications/notifications.service';
import { UsersService } from 'src/users/users.service';
import { Repository, getManager, QueryBuilder } from 'typeorm';
import { RejectOrderDto } from './dto/reject-parcel.dto';
import { CreateOrderDto } from './dto/create-order.dto';
import { CreateParcelDto } from './dto/create-parcel.dto';
import { ProcessOrderlDto } from './dto/process-order.dto';
import { UpdateParcelDto } from './dto/update-parcel.dto';
import { Order } from './entities/order.entity';
import { Parcel } from './entities/parcel.entity';
import { UpdateOrderDto } from './dto/update-order.dto';
import { Point, Geometry } from 'geojson'

import {
  WebSocketServer,
} from '@nestjs/websockets';
const { Expo } = require('expo-server-sdk');
const sendPushNotification = require('../../utilities/pushNotifications');
const driverDepartingPickupDistance = require('../../utilities/geolocation');

@Injectable()
export class ParcelsService {
  constructor(
    @InjectRepository(Parcel)
    private readonly parcelRepository: Repository<Parcel>,
    @InjectRepository(Order)
    private readonly orderRepository: Repository<Order>,
    @Inject(forwardRef(() => UsersService))
    private readonly userService: UsersService,

    @Inject(forwardRef(() => NotificationsService))
    private readonly notificationsService: NotificationsService,
    
    ) {}

  async  createOrder(createOrderDto:CreateOrderDto) : Promise<Order>  {
    console.log('createOrderDto', createOrderDto)
    
    const pointObject_orderDriverCoordinates :Point = {
      type: "Point",
      coordinates: [ createOrderDto.orderDriverCoordinates.latitude, createOrderDto.orderDriverCoordinates.longitude]
    }
    createOrderDto.orderDriverCoordinates = pointObject_orderDriverCoordinates

    const pointObject_orderPickupCoordinates :Point = {
      type: "Point",
      coordinates: [createOrderDto.orderPickupCoordinates.coordinates[0], createOrderDto.orderPickupCoordinates.coordinates[1]]
    }
    createOrderDto.orderPickupCoordinates = pointObject_orderPickupCoordinates
  

    const pointObject_orderDeliveryCoordinates :Point = {
      type: "Point",
      coordinates: [createOrderDto.orderDeliveryCoordinates.coordinates[0], createOrderDto.orderDeliveryCoordinates.coordinates[1]]
    }
    createOrderDto.orderDeliveryCoordinates = pointObject_orderDeliveryCoordinates
    
    console.log('processOrder createOrderDto', createOrderDto);
    const orderSchema = this.orderRepository.create(createOrderDto);
    const order = await this.orderRepository.save(orderSchema);
    return order
    
  } 
  
  
  async getOrdersHistory(userPhone: string): Promise<Array<Order>>{
    const user = await this.userService.findOneByPhone(userPhone)

    if(user.role === 'client'){
      const orders = await this.orderRepository.find(
        {
          where: { orderOwnerID: user.userId, orderStatus: 'delivered' },
        }
      );
      return orders
    }

    if(user.role === 'driver'){
      const orders = await this.orderRepository.find(
        {
          where: { orderDriverID: user.userId, orderStatus: 'delivered' },
        }
      );
      return orders
    }

    return []
  }


  async getOrdersByUser(userId: string, userRole: string): Promise<Array<Order>>{
    if(userRole === 'client'){
      const orders = await this.orderRepository.find(
        {
          where: { orderOwnerID: userId },
        }
      );
      return orders
    }

    if(userRole === 'driver'){
      const orders = await this.orderRepository.find(
        {
          where: { orderDriverID: userId },
        }
      );
      return orders
    }

    return []
  }


  async getAllOrders(): Promise<Array<Order>>{
    const orders = await this.orderRepository.find();
    return orders
    
  }
  async createParcelDeliveryRequest(createParcelDto: CreateParcelDto): Promise<Parcel> {
    console.log('createParcelDto')
    console.log(createParcelDto)
    const pointObject_exactPickupCoordinates :Point = {
      type: "Point",
      coordinates: [JSON.parse(createParcelDto.exactPickupCoordinates).latitude, JSON.parse(createParcelDto.exactPickupCoordinates).longitude]
    }
    createParcelDto.exactPickupCoordinates = pointObject_exactPickupCoordinates


    const pointObject_exactDeliveryCoordinates :Point = {
      type: "Point",
      coordinates: [JSON.parse(createParcelDto.exactDeliveryCoordinates).latitude, JSON.parse(createParcelDto.exactDeliveryCoordinates).longitude]
    }
    createParcelDto.exactDeliveryCoordinates = pointObject_exactDeliveryCoordinates
    
    
    console.log('updated createParcelDto', createParcelDto)
    const parcelSchema = this.parcelRepository.create(createParcelDto);
    const parcel = await this.parcelRepository.save(parcelSchema);
    console.log('new parcel')
    console.log(parcel)
    return parcel;
  }

  async startPickupTrip(orderID: string, driverCoordinates: string): Promise<any> {
    console.log('startPickupTrip driverCoordinates')
    console.log(driverCoordinates)
    const pointObject_driverCoordinates :Point = {
      type: "Point",
      coordinates: [JSON.parse(driverCoordinates).longitude, JSON.parse(driverCoordinates).latitude]
    }


    let order = await this.findOneByOrderID(orderID)
    order['orderDriverCoordinates'] = pointObject_driverCoordinates
    order['orderStatus'] = 'pickup'
    let updatedOrder = await this.updateOrder(orderID, order)

    console.log('updatedOrder');
    console.log(updatedOrder);
    const orderOwner = await this.userService.findOne((await order).orderOwnerID)
    const orderOwnerPhone = orderOwner.phone;
    let startPickupTripNotification = {
    orderDriverCoordinates: updatedOrder.orderDriverCoordinates,
    orderPickupCoordinates: updatedOrder.orderPickupCoordinates,
    orderDeliveryCoordinates: updatedOrder.orderDeliveryCoordinates,
    orderOwnerPhone: orderOwner.phone,
    orderOwnerID: orderOwner.userId
    }
 
    return startPickupTripNotification;
  }

  async updateOrder(orderID: string,updateOrderDto: UpdateOrderDto,): Promise<Order> {
    const order = await this.orderRepository.preload({
      orderID: orderID,
      ...updateOrderDto,
    });

    if (!order) {
      throw new NotFoundException(`User #${orderID} not found`);
    }
    return this.orderRepository.save(order);
  }


  async processOrder(processOrderDTO: ProcessOrderlDto){
      let parcel = await this.findOneByPackageID(processOrderDTO.packageID)
      const parcelOwner = await this.userService.findOne((await parcel).packageOwnerID)
      const acceptingDriver = await this.userService.findOneByPhone(processOrderDTO.driverPhone)
      console.log('acceptingDriver');
      (parcel).packageDriverID = acceptingDriver.userId

        parcel = await this.updateParcel(processOrderDTO.packageID, parcel)
      console.log('processOrder parcel', parcel);

        let countryCode = acceptingDriver.phone.slice(0,3)
        let newOrder  = {
          //order
          orderParcelID: parcel.packageID,
          orderDate: Date.now().toString(),
          orderType: parcel.packageType,
          orderPaymentStatus: 'not-paid',
          orderPaymentMethod: parcel.paymentMethod === null ? 'cash on delivery' : parcel.paymentMethod,
          orderCountry: countryCode && countryCode === '+26' ? 'zw' : 'za',

          // order driver
          orderDriverID: parcel.packageDriverID,
          orderDriverFirstName: acceptingDriver.firstName,
          orderDriverLastName: acceptingDriver.lastName,
          orderDriverCoordinates: processOrderDTO.driverCoordinates,

          //order client
          orderOwnerID: parcelOwner.userId,
          orderOwnerFirstName: parcelOwner.firstName,
          orderOwnerLastName: parcelOwner.lastName,
                        
          //Pickup Data
          orderPickupTime: processOrderDTO.orderPickupTime,
          orderPickupCoordinates: parcel.exactPickupCoordinates,
          orderPickupAddress: parcel.exactPickupAddress,
          orderPickupDistance: parcel.exactPickupCoordinates,

          //Delivery Data
          orderDeliveryDistance: parcel.packageDeliveryDistance,
          orderDeliveryCoordinates: parcel.exactDeliveryCoordinates,
          orderDeliveryAddress: parcel.exactDeliveryAddress,
          orderDeliveryFee: parcel.packageDeliveryFee, 

          // from generated now
          orderStatus: 'accepted',

        }

        let order = await this.createOrder(newOrder)        
        return order
      
  }


  async driverOrderReject(rejectParcelDto: RejectOrderDto){
    // Find New Driver

    console.log('driver rejected')
      const rejectingDriver = this.userService.findOne(rejectParcelDto.driverID)
      let driverID = (await rejectingDriver).userId
      let rejectedDriverIds : Array<string> = Array(driverID,);

      const drivers = await this.userService.getDrivers(rejectedDriverIds);
      const driver = drivers[0];
      console.log('driver');
      console.log(driver.phone);
      const driverPhone = driver.phone;
      let pushToken: string;
      console.log('get ExpoPushToken value');
      console.log(pushToken);
  
      await this.notificationsService.getExpoPushToken(driverPhone).then((value) => {
        console.log('value');
        console.log(value);
        pushToken = value;
      });
      console.log('Got driver pushToken');
      console.log(pushToken);
      const parcel = this.findOneByPackageID(rejectParcelDto.packageID)

      if (Expo.isExpoPushToken(pushToken)) {
        console.log('send PushNotification for  Parcel Accept');
        let category = {
          type: 'accept',
          title: 'driver Parcel Accept'
        }
        parcel['notificationCategory'] = category
        const message = JSON.stringify(parcel);
        await sendPushNotification(pushToken, message, category);
      }

    return null;
  }


  async findOneByOrderID(orderID: string): Promise<Order> {
    console.log('User orderID')
    console.log(orderID)

    const order = await this.orderRepository.findOne({ where: { orderID: orderID } });
    console.log('order')
    console.log(order)
    
    if (!order) {
      throw new NotFoundException(`User #${orderID} not found`);
    }
    return order;
  }

  async findOneByPackageID(packageID: string): Promise<Parcel> {
    console.log('User packageID')
    console.log(packageID)

    const parcel = await this.parcelRepository.findOne({ where: { packageID: packageID } });
    console.log('parcel')
    console.log(parcel)
    
    if (!parcel) {
      throw new NotFoundException(`User #${packageID} not found`);
    }
    return parcel;
  }
  async updateParcel(
    packageID: string,
    updateParcelDto: UpdateParcelDto,
  ): Promise<Parcel> {
    const parcel = await this.parcelRepository.preload({
      packageID: packageID,
      ...updateParcelDto,
    });

    if (!parcel) {
      throw new NotFoundException(`User #${packageID} not found`);
    }
    return this.parcelRepository.save(parcel);
  }

  findAll() {
    return `This action returns all parcels`;
  }

  findOne(id: number) {
    return `This action returns a #${id} parcel`;
  }


  remove(id: number) {
    return `This action removes a #${id} parcel`;
  }
}

