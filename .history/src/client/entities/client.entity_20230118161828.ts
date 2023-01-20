import { ObjectType, Field } from '@nestjs/graphql';
import { Ride } from 'src/ride/entities/ride.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
@ObjectType('Client')
export class Client {
  @PrimaryGeneratedColumn('uuid')
  @Field(() => String, { description: 'id of the user' })
  clientId: string;
  @Column()
  @Field(() => String, { description: 'phone of the user' })
  phone: string;
  @Column()
  @Field(() => String, { description: 'phone of the user' })
  firstName: string;
  @Field(() => String, { description: 'phone of the user' })
  phone: string;
  @Field(() => String, { description: 'phone of the user' })
  pin: string;
  @Column()
  @Field(() => String, { description: 'role of the user' })
  role: string;
  @OneToMany(() => Ride, (ride) => ride.customer)
  @Field(() => [Ride], { nullable: true })
  rides?: Ride[];
}