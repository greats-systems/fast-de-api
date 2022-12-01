import { forwardRef, Inject, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { NotificationsService } from 'src/notifications/notifications.service';
import { UsersService } from 'src/users/users.service';
import { Repository } from 'typeorm';
import { AcceptRideInput, CreateRideInput } from './dto/create-ride.input';
import { UpdateRideInput } from './dto/update-ride.input';
import { Ride } from './entities/ride.entity';
import { PubSub } from 'graphql-subscriptions';
import { Subscription } from '@nestjs/graphql';
import { Trip } from './entities/trip.entity';

const { Expo } = require('expo-server-sdk');

const sendPushNotification = require('../../utilities/pushNotifications');

const pubSub = new PubSub();
@Injectable()
export class RideService {
  constructor(
    @InjectRepository(Ride)
    private rideRepository: Repository<Ride>,

    @InjectRepository(Trip)
    private tripRepository: Repository<Trip>,

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
      
      savedRide['notificationCategory'] = category
      const message = JSON.stringify(savedRide);
      await sendPushNotification(pushToken, message, category);
    }

    pubSub.publish('newRideRequest', { newRideRequest: savedRide });
    return savedRide;
  }
  async driverAcceptRideRequest(acceptRideInput: AcceptRideInput) {
    // const customer = this.userService.getUserProfile()
    let category = {
      id: 'accept',
      title: 'driver Ride Accept'
    }


    console.log('accept Ride Request');
    const acceptedRideInput = acceptRideInput
    console.log(acceptRideInput)
    const savedTrip = await this.tripRepository.save(acceptedRideInput);

    const customerId = acceptedRideInput.customerId;
    console.log('savedTrip');
    console.log(savedTrip);

    let pushToken: string;

    console.log('get ExpoPushToken value');
    console.log(pushToken);

    await this.notificationsService.getExpoPushToken(customerId).then((value) => {
      console.log('value');
      console.log(value);
      pushToken = value;
    });

    console.log('Got customer pushToken');
    console.log(pushToken);

    if (Expo.isExpoPushToken(pushToken)) {
      console.log('send PushNotification for  saved Trip');
      savedTrip['notificationCategory'] = category
      const message = JSON.stringify(savedTrip);
      await sendPushNotification(pushToken, message, category);
    }

    pubSub.publish('savedTrip', { savedTrip: savedTrip });
    return savedTrip;
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
