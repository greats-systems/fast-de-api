import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateMobileUserDTO {
  @Field(() => String, { description: 'phone of the user' })
  phone: string;
  @Field(() => String, { description: 'password of the user' })
  pin: string;
  @Field(() => String, { description: 'role of the user' })
  role: string;
  @Field(() => String, { description: 'app of the user' })
  app: string;
}

@InputType()
export class CreateUserDTO {
  @Field(() => String, { description: 'first name of the user' })
  firstName?: string;
  @Field(() => String, { description: 'first name of the user' })
  lastName?: string;
  @Field(() => String, { description: 'phone of the user' })
  email: string;
  @Field(() => String, { description: 'password of the user' })
  password: string;
  @Field(() => String, { description: 'role of the user' })
  role: string;
}