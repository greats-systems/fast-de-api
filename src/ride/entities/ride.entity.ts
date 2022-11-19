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

@Entity()
@ObjectType()
export class Ride {
  @PrimaryGeneratedColumn('uuid')
  @Field(() => String, { description: 'Example field (placeholder)' })
  rideID: string;

  @Column()
  @Field((type) => String, { description: 'customer field (placeholder)' })
  customerId: string;

  @ManyToOne(() => User, (customer: User) => customer.rides)
  @Field((type) => User)
  customer: User;

  @Column()
  @Field(() => String, { description: 'amount field (placeholder)' })
  amount: string;
  @Column()
  @Field(() => String, { description: 'rideType field (placeholder)' })
  rideType: string;
  @Column()
  @Field(() => String, { description: 'distance field (placeholder)' })
  distance: string;
  @Column()
  @Field(() => String, { description: 'estimatedDuration field (placeholder)' })
  estimatedDuration: string;

  // ORIGIN
  @OneToOne(() => Origin, {
    eager: true,
    cascade: true,
  })
  @JoinColumn()
  @Field(() => Origin, {
    nullable: true,
    description: 'Pickup field (placeholder)',
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
    description: 'Dropoff field (placeholder)',
  })
  public destination: Destination;
}

@InputType('RideInput')
@ObjectType('RideInputType')
export class RideInput {
  @Column()
  @Field((type) => String, { description: 'customer field (placeholder)' })
  customerId: string;
  @Column()
  @Field(() => String, { description: 'amount field (placeholder)' })
  amount: string;
  @Column()
  @Field(() => String, { description: 'rideType field (placeholder)' })
  rideType: string;
  @Column()
  @Field(() => String, { description: 'distance field (placeholder)' })
  distance: string;
  @Column()
  @Field(() => String, { description: 'estimatedDuration field (placeholder)' })
  estimatedDuration: string;

  // ORIGIN
  @OneToOne(() => Origin, {
    eager: true,
    cascade: true,
  })
  @JoinColumn()
  @Field(() => Origin, {
    nullable: true,
    description: 'Pickup field (placeholder)',
  })
  origin: Origin;

  // DESTINATION
  @OneToOne(() => Destination, {
    eager: true,
    cascade: true,
  })
  @JoinColumn()
  @Field(() => Destination, {
    nullable: true,
    description: 'Dropoff field (placeholder)',
  })
  destination: Destination;
}
