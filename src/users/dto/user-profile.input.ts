import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class UserProfileInput {
  @Field(() => String, { description: 'token of the user' })
  token: string;
}
