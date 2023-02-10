import { ObjectType, InputType, Field, Int } from '@nestjs/graphql';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
@ObjectType('Notifications')
export class Notifications {
  @PrimaryGeneratedColumn('uuid')
  @Field(() => String, { description: 'expoPushTokenID of the user' })
  expoPushTokenID: string;

  @Column()
  @Field((type) => String, { description: 'expoPushToken field (placeholder)' })
  expoPushToken: string;

  @Column()
  @Field((type) => String, { description: 'customer field (placeholder)' })
  phone?: string;

  @Column()
  @Field((type) => String, { description: ' service type if driver/customer' })
  userRole?: string;
}
