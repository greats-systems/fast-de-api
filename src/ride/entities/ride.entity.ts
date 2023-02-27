import { ObjectType, Field, Int, InputType } from '@nestjs/graphql';
import { Driver } from 'src/driver/entities/driver.entity';
import { User } from 'src/users/entities/user.entity';
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
  // driver
  @ManyToOne(() => Driver, (driver: Driver) => driver.rides)
  @Field((type) => Driver)
  driver: Driver;
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