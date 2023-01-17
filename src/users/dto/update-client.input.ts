import { CreateUserInput } from './create-user.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';
import { RegisterClientInput } from './register-client.input';

@InputType()
export class UpdateClientInput extends PartialType(RegisterClientInput) {
  @Field(() => String, { description: 'id of the user' })
  userId: string;
  @Field(() => String, { description: 'first name of the user' })
  firstName: string;
  @Field(() => String, { description: 'last name of the user' })
  lastName: string;
  @Field(() => String, { description: 'phone of the user' })
  phone: string;
  @Field(() => String, { description: 'password of the user' })
  password: string;
  @Field(() => String, { description: 'role of the user' })
  role: string;
}
