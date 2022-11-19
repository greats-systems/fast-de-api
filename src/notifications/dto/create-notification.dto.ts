import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateExpoPushTokenDto {
  @Field(() => String, { description: 'expoPushToken of the user' })
  expoPushToken: string;
  @Field(() => String, { description: 'userId of the user' })
  userId?: string;
  @Field((type) => String, { description: ' service type if driver/customer' })
  userRole?: string;
}
