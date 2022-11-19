import { InputType, Int, Field } from '@nestjs/graphql';
import { User, UserInput } from 'src/users/entities/user.entity';
import { Column, JoinColumn, OneToOne } from 'typeorm';
import {
  Coordinates,
  Destination,
  DestinationInput,
  Origin,
  OriginInput,
} from '../entities/coordinates.entity';

@InputType()
export class CreateRideInput {
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
  @Field(() => OriginInput, {
    nullable: true,
    description: 'Pickup field (placeholder)',
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
    description: 'Dropoff field (placeholder)',
  })
  destination: DestinationInput;
}
