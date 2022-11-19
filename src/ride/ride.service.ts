import { forwardRef, Inject, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { NotificationsService } from 'src/notifications/notifications.service';
import { UsersService } from 'src/users/users.service';
import { Repository } from 'typeorm';
import { CreateRideInput } from './dto/create-ride.input';
import { UpdateRideInput } from './dto/update-ride.input';
import { Ride } from './entities/ride.entity';
import { PubSub } from 'graphql-subscriptions';
import { Subscription } from '@nestjs/graphql';

const { Expo } = require('expo-server-sdk');

const sendPushNotification = require('../../utilities/pushNotifications');

const pubSub = new PubSub();
@Injectable()
export class RideService {
  constructor(
    @InjectRepository(Ride)
    private rideRepository: Repository<Ride>,

    @Inject(forwardRef(() => UsersService))
    private readonly userService: UsersService,

    @Inject(forwardRef(() => NotificationsService))
    private readonly notificationsService: NotificationsService,
  ) {}

  @Subscription((returns) => Ride, { name: 'newRideRequest' })
  newRideRequest() {
    return pubSub.asyncIterator('newRideRequest');
  }
  async createRide(createRideInput: CreateRideInput) {
    // const customer = this.userService.getUserProfile()
    console.log('create Ride Request');
    const createRide = this.rideRepository.create(createRideInput);
    const savedRide = await this.rideRepository.save(createRideInput);
    const drivers = await this.userService.getDrivers('driver');
    const driver = drivers[0];
    console.log('driver');
    console.log(driver.userId);
    const driverId = driver.userId;
    let pushToken: string;

    console.log('get ExpoPushToken value');
    console.log(pushToken);

    await this.notificationsService.getExpoPushToken(driverId).then((value) => {
      console.log('value');
      console.log(value);
      pushToken = value;
    });

    console.log('Got driver pushToken');
    console.log(pushToken);

    if (Expo.isExpoPushToken(pushToken)) {
      console.log('send PushNotification for  Ride Request');
      const message = JSON.stringify(savedRide);
      await sendPushNotification(pushToken, message);
    }

    pubSub.publish('newRideRequest', { newRideRequest: savedRide });
    return savedRide;
  }

  findAll() {
    return this.rideRepository.find({
      relations: {
        customer: true,
      },
    });
  }

  findOne(rideID: string): Promise<Ride> {
    return this.rideRepository.findOneBy({ rideID });
  }

  update(rideID: string, updateRideInput: UpdateRideInput) {
    return this.rideRepository.findOneBy({ rideID });
  }

  async remove(rideID: string): Promise<void> {
    await this.rideRepository.delete(rideID);
  }

  async getCustomer(customerId: string) {
    return await this.userService.findOne(customerId);
  }
}
