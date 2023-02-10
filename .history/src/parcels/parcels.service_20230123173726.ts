import { forwardRef, Inject, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { AuthService } from 'src/common/auth/auth.service';
import { NotificationsService } from 'src/notifications/notifications.service';
import { UsersService } from 'src/users/users.service';
import { Repository } from 'typeorm';
import { CreateParcelDto } from './dto/create-parcel.dto';
import { UpdateParcelDto } from './dto/update-parcel.dto';
import { Parcel } from './entities/parcel.entity';

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

  findAll() {
    return `This action returns all parcels`;
  }

  findOne(id: number) {
    return `This action returns a #${id} parcel`;
  }

  update(id: number, updateParcelDto: UpdateParcelDto) {
    return `This action updates a #${id} parcel`;
  }

  remove(id: number) {
    return `This action removes a #${id} parcel`;
  }
}
function sendPushNotification(pushToken: string, message: string, category: { type: string; title: string; }) {
  throw new Error('Function not implemented.');
}

