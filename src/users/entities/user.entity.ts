import { ObjectType, InputType, Field, Int } from '@nestjs/graphql';
import { Ride } from 'src/ride/entities/ride.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
@ObjectType('UserType')
export class User {
  @PrimaryGeneratedColumn('uuid')
  @Field(() => String, { description: 'id of the user' })
  userId: string;
  @Column({nullable: true})
  @Field(() => String, { description: 'first name of the user' })
  firstName?: string;
  @Column({nullable: true})
  @Field(() => String, { description: 'last name of the user' })
  lastName?: string;
  @Column({nullable: true})
  @Field(() => String, { description: 'phone of the user' })
  phone: string;
  @Column({nullable: true})
  // @Field(() => String, { description: 'password of the user' })
  password?: string;
  @Column({nullable: true})
  // @Field(() => String, { description: 'password of the user' })
  email?: string;
  @Column({nullable: true})
  // @Field(() => String, { description: 'password of the user' })
  pin?: string;
  @Column({nullable: true})
  @Field(() => String, { description: 'role of the user' })
  role: string;
  @OneToMany(() => Ride, (ride) => ride.customer)
  @Field((type) => [Ride], { nullable: true })
  rides?: Ride[];
}
