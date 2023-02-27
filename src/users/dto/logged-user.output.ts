import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class LoggedUserOutput {
  @Field(() => String, { description: 'Generated access_token of the user' })
  access_token: string;
}



@ObjectType()
export class GetMobileUserTokenDTO {
  @Field(() => String, { description: 'Generated access_token of the user' })
  access_token: string;
}