import { forwardRef, Inject, Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { AuthService } from 'src/common/auth/auth.service';
import { UpdateDriverDTO } from 'src/driver/dto/update-driver.dto';
import { NotificationsService } from 'src/notifications/notifications.service';
import { UsersService } from 'src/users/users.service';
import { Repository } from 'typeorm';
import { AcceptRejectParcelDto } from './dto/accpet-reject-parcel.dto';
import { CreateOrderDto } from './dto/create-order.dto';
import { CreateParcelDto } from './dto/create-parcel.dto';
import { UpdateParcelDto } from './dto/update-parcel.dto';
import { Order } from './entities/order.entity';
import { Parcel } from './entities/parcel.entity';
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


  async acceptReject(acceptRejectParcelDto: AcceptRejectParcelDto){
    console.log('acceptReject id')
    console.log(acceptRejectParcelDto.packageID)


    if(acceptRejectParcelDto.driverDecision === 'accept'){
      let parcel = await this.findOneByPackageID(acceptRejectParcelDto.packageID)
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
      const acceptingDriver = await this.userService.findOneByPhone(acceptRejectParcelDto.driverPhone)
      console.log(acceptingDriver);
      (parcel).packageDriverID = acceptingDriver.userId

      if (Expo.isExpoPushToken(pushToken)) {
        console.log('send PushNotification for  Parcel Accept');

        console.log('parcel dto');
        console.log(parcel);
        // driver current coords
        const LATITUDE = 37.78825;
        const LONGITUDE = -122.4324;

        parcel = await this.updateParcel(acceptRejectParcelDto.packageID, parcel)
        let driverPickupDistance = driverDepartingPickupDistance()
        let newOrder  = {
          packageID: parcel.packageID,
          orderDriverID: parcel.packageDriverID,
          orderDriverFirstName: acceptingDriver.firstName,
          orderDriverLastName: acceptingDriver.lastName,
          orderOwnerID: parcel.packageOwnerID,
          orderType: parcel.packageType,
          orderPickupTime: '2 PM',
          orderDriverDepartingCoordinates: acceptRejectParcelDto.driverDepartingCoordinates,
          driverDepartingPickupDistance: '37.78825, 37.78825',
          orderPickupCoordinates: parcel.exactPickupAddress,
          orderDeliveryCoordinates: parcel.exactDeliveryAddress,
          orderRouteDistance: parcel.routeDistance,
          DeliveryStatus: 'pickup',
          orderAmount: parcel.amount,
        }

        console.log(newOrder)
        let order = await this.createOrder(newOrder)
        let category = {
          type: 'accept',
          title: 'driver Parcel Accept'
        }
        order['notificationCategory'] = category
        const message = JSON.stringify(order);
        await sendPushNotification(pushToken, message, category);
      }
    }

    if(acceptRejectParcelDto.driverDecision === 'reject'){
      const rejectingDriver = this.userService.findOneByPhone(acceptRejectParcelDto.driverPhone)

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
      const parcel = this.findOneByPackageID(acceptRejectParcelDto.packageID)

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
    }
    return 'success';
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

