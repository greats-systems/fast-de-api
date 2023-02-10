import { forwardRef, Inject, Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { AuthService } from 'src/common/auth/auth.service';
import { NotificationsService } from 'src/notifications/notifications.service';
import { UsersService } from 'src/users/users.service';
import { Repository } from 'typeorm';
import { AcceptRejectParcelDto } from './dto/accpet-reject-parcel.dto';
import { CreateParcelDto } from './dto/create-parcel.dto';
import { UpdateParcelDto } from './dto/update-parcel.dto';
import { Parcel } from './entities/parcel.entity';
const { Expo } = require('expo-server-sdk');
const sendPushNotification = require('../../utilities/pushNotifications');

@Injectable()
export class ParcelsService {
  constructor(
    @InjectRepository(Parcel)
    private readonly parcelRepository: Repository<Parcel>,
    @Inject(forwardRef(() => UsersService))
    private readonly userService: UsersService,

    @Inject(forwardRef(() => NotificationsService))
    private readonly notificationsService: NotificationsService,
    ) {}

  async create(createParcelDto: CreateParcelDto): Promise<Parcel> {
    console.log('createParcelDto')
    console.log(createParcelDto)
    const parcelSchema = this.parcelRepository.create(createParcelDto);
    const parcel = await this.parcelRepository.save(parcelSchema);
    console.log('new parcel')
    console.log(parcel)
    const drivers = await this.userService.getDrivers('driver');
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


  async acceptReject(acceptRejectParcelDto: AcceptRejectParcelDto): Promise<Parcel> {
    console.log('acceptReject')
    console.log(acceptRejectParcelDto)

    if(acceptRejectParcelDto.driverDecision === 'accept'){
      const packageOwner = this.parcelRepository.
    }
    const drivers = await this.userService.getDrivers('driver');
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

