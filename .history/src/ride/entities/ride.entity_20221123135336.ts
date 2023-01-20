import { ObjectType, Field, Int, InputType } from '@nestjs/graphql';
import { User, UserInput } from 'src/users/entities/user.entity';
import {
  Column,
  Index,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
  OneToOne,
  JoinColumn,
} from 'typeorm';
import { Coordinates, Destination, Origin } from './coordinates.entity';
import { Trip } from './trip.entity';

@Entity()
@ObjectType()
export class Ride {
  @PrimaryGeneratedColumn('uuid')
  @Field(() => String, { description: 'Example field' })
  rideID: string;
  @Column()
  @Field((type) => String, { description: 'customer field' })
  customerId: string;
  
  @ManyToOne(() => User, (customer: User) => customer.rides)
  @Field((type) => User)
  customer: User;

  // @Column()
  // @Field((type) => String, { nullable: true , description: 'trip field' })
  // tripId?: string;

  // @OneToOne(() => Trip, (trip) => trip.ride_request)
  // @Field((type) => Trip, { nullable: true })
  // trip?: Trip;

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
  @Field(() => Origin, {
    nullable: true,
    description: 'Pickup field',
  })
  public origin: Origin;

  // DESTINATION
  @OneToOne(() => Destination, {
    eager: true,
    cascade: true,
  })
  @JoinColumn()
  @Field(() => Destination, {
    nullable: true,
    description: 'Dropoff field',
  })
  public destination: Destination;
}