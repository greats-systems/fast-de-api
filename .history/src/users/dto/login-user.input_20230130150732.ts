import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class LoginMobileUserDTO {
  @Field(() => String, { description: 'phone of the user' })
  phone: string;
  @Field(() => String, { description: 'password of the user' })
  pin: string;
  @Field(() => String, { description: 'password of the user' })
  pin: string;
}