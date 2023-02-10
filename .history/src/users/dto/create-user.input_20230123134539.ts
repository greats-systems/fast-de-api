import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateMobileUserDTO {
  // @Field(() => String, { description: 'id of the user' })
  // userId: string;

  @Field(() => String, { description: 'phone of the user' })
  phone: string;
  @Field(() => String, { description: 'password of the user' })
  pin: string;
  @Field(() => String, { description: 'role of the user' })
  role: string;
}
