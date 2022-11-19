import { PartialType } from '@nestjs/mapped-types';
import { CreateExpoPushTokenDto } from './create-notification.dto';
import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class UpdateExpoPushTokenDto extends PartialType(
  CreateExpoPushTokenDto,
) {
  @Field(() => String, { description: 'expoPushToken of the user' })
  expoPushToken: string;
}
