import {
  Resolver,
  Query,
  Mutation,
  Context,
  Args,
  Int,
  Parent,
  ResolveField,
  Subscription,
} from '@nestjs/graphql';
import { RideService } from './ride.service';
import { Ride } from './entities/ride.entity';
import { CreateRideInput } from './dto/create-ride.input';
import { UpdateRideInput } from './dto/update-ride.input';
import { Request } from 'express';
import { User } from 'src/users/entities/user.entity';

@Resolver(() => Ride)
export class RideResolver {
  constructor(private readonly rideService: RideService) {}

  @Mutation(() => Ride)
  async createRide(
    @Args('createRideInput') createRideInput: CreateRideInput,
    @Context('req') req,
  ) {
    console.log('req.headers.authorization ');
    const token = req.headers.authorization;
    const newRideRequest = this.rideService.createRide(createRideInput);
    return newRideRequest;
  }

  @Query(() => [Ride], { name: 'getAllRides' })
  findAll() {
    return this.rideService.findAll();
  }

  @Query(() => Ride, { name: 'getRide' })
  findOne(@Args('rideID', { type: () => String }) rideID: string) {
    return this.rideService.findOne(rideID);
  }
  @ResolveField((returns) => User)
  customer(@Parent() ride: Ride): Promise<User> {
    return this.rideService.getCustomer(ride.customerId);
  }

  @Mutation(() => Ride)
  updateRide(@Args('updateRideInput') updateRideInput: UpdateRideInput) {
    return this.rideService.update(updateRideInput.rideID, updateRideInput);
  }

  @Mutation(() => Ride)
  removeRide(@Args('id', { type: () => String }) rideID: string) {
    return this.rideService.remove(rideID);
  }
}
