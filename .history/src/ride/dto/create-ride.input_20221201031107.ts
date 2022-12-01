import { InputType, Int, Field } from '@nestjs/graphql';
import { User, UserInput } from 'src/users/entities/user.entity';
import { Column, JoinColumn, OneToOne } from 'typeorm';
import {
  Coordinates,
  Destination,
  DestinationInput,
  Location,
  LocationInput,
  Origin,
  OriginInput,
} from '../entities/coordinates.entity';

@InputType()
export class CreateRideInput {
  @Column()
  @Field((type) => String, { description: 'customer field' })
  customerId: string;
  @Column()
  @Field(() => String, { description: 'amount field' })
  amount: string;
  @Column()
  @Field(() => String, { description: 'rideType field' })
  rideType: string;
  @Column()
  @Field(() => String, { description: 'distance field' })
  distance: string;
  @Column()
  @Field(() => String, { description: 'estimatedDuration field' })
  estimatedDuration: string;

  // ORIGIN
  @OneToOne(() => Origin, {
    eager: true,
    cascade: true,
  })
  @JoinColumn()
  @Field(() => OriginInput, {
    nullable: true,
    description: 'Pickup field',
  })
  origin: OriginInput;

  // DESTINATION
  @OneToOne(() => Destination, {
    eager: true,
    cascade: true,
  })
  @JoinColumn()
  @Field(() => DestinationInput, {
    nullable: true,
    description: 'Dropoff field',
  })
  destination: DestinationInput;
}


@InputType()
export class AcceptRideInput {
  @Column()
  @Field((type) => String, { description: 'ride field' })
  rideId: string;
  @Column()
  @Field((type) => String, { description: 'driver field' })
  driverId: string;
  @Column()
  @Field((type) => String, { description: 'customer field' })
  customerId: string;
  @Column()
  @Field(() => String, { description: 'distance field' })
  distance: string;
  @Column()
  @Field(() => String, { description: 'estimatedDuration field' })
  estimatedDuration: string;

  //Driver ORIGIN
  @OneToOne(() => Location, {
    eager: true,
    cascade: true,
  })
  @JoinColumn()
  @Field(() => LocationInput, {
    nullable: true,
    description: 'Driver Current location',
  })
  driver_origin: LocationInput;

    // CUSTOMER ORIGIN
    @OneToOne(() => Location, {
      eager: true,
      cascade: true,
    })
    @JoinColumn()
    @Field(() => LocationInput, {
      nullable: true,
      description: 'Customer pickup location',
    })
    customer_origin: LocationInput;
}
