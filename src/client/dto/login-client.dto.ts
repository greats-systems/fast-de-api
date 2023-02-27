import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class LoginUserInput {
  @Field(() => String, { description: 'phone of the user' })
  phone: string;
  @Field(() => String, { description: 'password of the user' })
  pin: string;
}

export class VerifyUserOTPInput {
  @Field(() => String, { description: 'user_id of the user' })
  client_id: string;
  @Field(() => String, { description: 'otp of the user' })
  otp: string;
}
