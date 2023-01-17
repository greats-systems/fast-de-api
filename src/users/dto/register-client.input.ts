import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class RegisterClientInput {

  @Field(() => String, { description: 'phone of the user' })
  phone: string;
  @Field(() => String, { description: 'role of the user' })
  role: string;
}
