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
import { Coordinates, Destination, Location, Origin } from './coordinates.entity';
import { Ride } from './ride.entity';

@Entity()
@ObjectType()
export class Trip {
  @PrimaryGeneratedColumn('uuid')
  @Field(() => String, { description: 'RideService field' })
  rideServiceID: string;
  
  @Column()
  @Field((type) => String, { description: 'ride ID field' })
  rideId: string;
  
  @Column()
  @Field((type) => String, { description: 'distance field' })
  distance: string;
  @Column()
  @Field((type) => String, { description: 'estimatedDuration field' })
  estimatedDuration: string;


  @OneToOne(() => Ride)
  @Field(() => Ride, { nullable: true })
  @JoinColumn({ name:'rideId'})
  ride_request: Ride;

  @ManyToOne(() => User, (customer: User) => customer.rides)
  @Field((type) => User)
  customer: User;

  @ManyToOne(() => User, (driver: User) => driver.rides)
  @Field((type) => User)
  driver: User;

    //DRIVER  ORIGIN
   @OneToOne(() => Location, {
      eager: true,
      cascade: true,
    })
    @JoinColumn()
    @Field(() => Location, {
      nullable: true,
      description: 'Driver Initial location',
    })
    driver_origin: Location;

        // CUSTOMER ORIGIN
   @OneToOne(() => Location, {
    eager: true,
    cascade: true,
  })
  @JoinColumn()
  @Field(() => Location, {
    nullable: true,
    description: 'Driver Initial location',
  })
  customer_origin: Location;

}
