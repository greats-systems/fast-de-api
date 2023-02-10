import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class LoginUserDTO {
  @Field(() => String, { description: 'phone of the user' })
  phone: string;
  @Field(() => String, { description: 'password of the user' })
  password: string;
}
