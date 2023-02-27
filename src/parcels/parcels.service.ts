import { forwardRef, Inject, Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { AuthService } from 'src/common/auth/auth.service';
import { UpdateDriverDTO } from 'src/driver/dto/update-driver.dto';
import { NotificationsService } from 'src/notifications/notifications.service';
import { UsersService } from 'src/users/users.service';
import { Repository } from 'typeorm';
import { RejectOrderDto } from './dto/reject-parcel.dto';
import { CreateOrderDto } from './dto/create-order.dto';
import { CreateParcelDto } from './dto/create-parcel.dto';
import { ProcessOrderlDto } from './dto/process-order.dto';
import { UpdateParcelDto } from './dto/update-parcel.dto';
import { Order } from './entities/order.entity';
import { Parcel } from './entities/parcel.entity';
import { UpdateOrderDto } from './dto/update-order.dto';
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
  async create(createParcelDto: CreateParcelDto): Promise<Parcel> {
    console.log('createParcelDto')
    console.log(createParcelDto)
    const parcelSchema = this.parcelRepository.create(createParcelDto);
    const parcel = await this.parcelRepository.save(parcelSchema);
    console.log('new parcel')
    console.log(parcel)
    let driverID = ''
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
    if (Expo.isExpoPushToken(pushToken)) {
      console.log('send PushNotification for  Ride Request');
      let category = {
        type: 'request',
        title: 'driver Ride Request'
      }
      parcel['notificationCategory'] = category
      const message = JSON.stringify(parcel);
      await sendPushNotification(pushToken, message, category);
    }
    return parcel;
  }

  async runDelivery(orderID: string, status: string): Promise<Order> {
    console.log('orderID');
    console.log(orderID);

    let order = await this.findOneByOrderID(orderID)
    console.log('order');
    console.log(order);
    order['orderStatus'] = status
    let updatedOrder = await this.updateOrder(orderID, order)

    console.log('updatedOrder');
    console.log(updatedOrder);
    const orderOwner = await this.userService.findOne((await order).orderOwnerID)
    console.log('orderOwner');
    console.log(orderOwner);
    console.log((await orderOwner).phone);
    const orderOwnerPhone = (await orderOwner).phone;
    let pushToken: string;
    console.log('get ExpoPushToken value');
    console.log(pushToken);
    await this.notificationsService.getExpoPushToken(orderOwnerPhone).then((value) => {
      console.log('value');
      console.log(value);
      pushToken = value;
    });
    
    updatedOrder['orderDriverCoordinates'] = JSON.parse(updatedOrder.orderDriverCoordinates)
    updatedOrder['orderPickupCoordinates'] = JSON.parse(updatedOrder.orderPickupCoordinates)
    updatedOrder['orderDeliveryCoordinates'] = JSON.parse(updatedOrder.orderDeliveryCoordinates)

    if (Expo.isExpoPushToken(pushToken)) {
      console.log('send PushNotification');
      let category = {
        type: 'order',
        title: `order ${status} notification`
      }
      updatedOrder['notificationCategory'] = category
      const message = JSON.stringify(updatedOrder);
      await sendPushNotification(pushToken, message, category);
    }
    return updatedOrder;
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
    console.log('driver accepted')
    console.log(processOrderDTO)

      let parcel = await this.findOneByPackageID(processOrderDTO.packageID)
      const parcelOwner = await this.userService.findOne((await parcel).packageOwnerID)

      console.log('parcelOwner');
      console.log(parcelOwner);
      console.log((await parcelOwner).phone);
      const parcelOwnerPhone = (await parcelOwner).phone;
      let pushToken: string;
      console.log('get ExpoPushToken value');
      console.log(pushToken);
  
      await this.notificationsService.getExpoPushToken(parcelOwnerPhone).then((value) => {
        console.log('value');
        console.log(value);
        pushToken = value;
      });
  
      console.log('Got driver pushToken');
      console.log(pushToken);
      const acceptingDriver = await this.userService.findOneByPhone(processOrderDTO.driverPhone)
      console.log(acceptingDriver);
      (parcel).packageDriverID = acceptingDriver.userId

      if (Expo.isExpoPushToken(pushToken)) {
        console.log('send PushNotification for  Parcel Accept');

        // driver current coords
        const LATITUDE = 37.78825;
        const LONGITUDE = -122.4324;

        parcel = await this.updateParcel(processOrderDTO.packageID, parcel)
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
          orderDriverCoordinates: JSON.parse(processOrderDTO.driverCoordinates),

          //order client
          orderOwnerID: parcelOwner.userId,
          orderOwnerFirstName: parcelOwner.firstName,
          orderOwnerLastName: parcelOwner.lastName,
                        
          //Pickup Data
          orderPickupTime: processOrderDTO.orderPickupTime,
          orderPickupCoordinates: JSON.parse(parcel.exactPickupCoordinates) ,
          orderPickupAddress: parcel.exactPickupAddress,
          orderPickupDistance: processOrderDTO.packagePickupDistance,

          //Delivery Data
          orderDeliveryDistance: parcel.packageDeliveryDistance,
          orderDeliveryCoordinates: JSON.parse(parcel.exactDeliveryCoordinates),
          orderDeliveryAddress: parcel.exactDeliveryAddress,
          orderDeliveryFee: parcel.packageDeliveryFee, 

          // from generated now
          orderStatus: 'accepted',

        }

        console.log(newOrder)
        let order = await this.createOrder(newOrder)


        console.log('new order');
        console.log(order);
        let category = {
          type: 'accept',
          title: 'Delivery Order Created'
        }
        order['notificationCategory'] = category
        const message = JSON.stringify(order);
        await sendPushNotification(pushToken, message, category);
        
        return order
      }
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

