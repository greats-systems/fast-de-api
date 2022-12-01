import { ObjectType, InputType, Field, Int, Float } from '@nestjs/graphql';
import { Column, Entity, OneToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Ride } from './ride.entity';

@InputType('CoordinatesInput')
@ObjectType('CoordinatesType')
@Entity()
export class Coordinates {
  @Field(() => Float, { description: 'latitude field' })
  latitude: number;
  @Field(() => Float, { description: 'longitude field' })
  longitude: number;
  @Field(() => String, { description: 'address field' })
  address: string;
}

@Entity()
@ObjectType('OriginType')
export class Origin {
  @PrimaryGeneratedColumn('uuid')
  @Field(() => String, { description: 'locationID field (placeholder)' })
  locationID: string;

  @OneToOne(() => Ride, (ride: Ride) => ride.origin)
  public ride: Ride;

  @Field(() => Float, { description: 'latitude field' })
  latitude: number;
  @Field(() => Float, { description: 'longitude field' })
  longitude: number;
  @Field(() => String, { description: 'address field' })
  address: string;
}


@Entity()
@ObjectType('DestinationType')
export class Destination {
  @PrimaryGeneratedColumn('uuid')
  @Field(() => String, { description: 'locationID field (placeholder)' })
  locationID: string;
  @OneToOne(() => Ride, (ride: Ride) => ride.destination)
  public ride: Ride;
  @Field(() => Float, { description: 'latitude field' })
  latitude: number;
  @Field(() => Float, { description: 'longitude field' })
  longitude: number;
  @Field(() => String, { description: 'address field' })
  address: string;
}
@InputType('LocationInput')
@ObjectType('LocationInputType')
export class LocationInput {
  @OneToOne(() => Ride, (ride: Ride) => ride.destination)
  public ride: Ride;
  @Field(() => Float, { description: 'latitude field' })
  latitude: number;
  @Field(() => Float, { description: 'longitude field' })
  longitude: number;
  @Field(() => String, { description: 'address field' })
  address: string;
}
@InputType('OriginInput')
@ObjectType('OriginInputType')
export class OriginInput {
  @OneToOne(() => Ride, (ride: Ride) => ride.destination)
  public ride: Ride;
  @Field(() => Float, { description: 'latitude field' })
  latitude: number;
  @Field(() => Float, { description: 'longitude field' })
  longitude: number;
  @Field(() => String, { description: 'address field' })
  address: string;
}

@InputType('DestinationInput')
@ObjectType('DestinationInputType')
export class DestinationInput {
  @OneToOne(() => Ride, (ride: Ride) => ride.destination)
  public ride: Ride;
  @Field(() => Float, { description: 'latitude field' })
  latitude: number;
  @Field(() => Float, { description: 'longitude field' })
  longitude: number;
  @Field(() => String, { description: 'address field' })
  address: string;
}
