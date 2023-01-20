import { ObjectType, Field } from '@nestjs/graphql';
import { Ride } from 'src/ride/entities/ride.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
@ObjectType('Driver')
export class Driver {
  @PrimaryGeneratedColumn('uuid')
  @Field(() => String, { description: 'id of the user' })
  driverId: string;
  @Column()
  @Field(() => String, { description: 'phone of the user' })
  phone: string;
  @Column({nullable: true})
  @Field(() => String, { description: 'firstName of the user' })
  firstName?: string;
  @Column({nullable: true})
  @Field(() => String, { description: 'firstName of the user' })
  lastName?: string;
  @Column()
  @Field(() => String, { description: 'lastName of the user' })
  pin: string;
  @Column()
  @Field(() => String, { description: 'role of the user' })
  role: string;
  @OneToMany(() => Ride, (ride) => ride.driver)
  @Field(() => [Ride], { nullable: true })
  rides?: Ride[];
}