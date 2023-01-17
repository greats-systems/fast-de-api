import { Field } from "@nestjs/graphql";

export class CreateClientDto {
    
  @Field(() => String, { description: 'phone of the user' })
  phone: string;
  @Field(() => String, { description: 'pin of the user' })
  pin: string;
  @Field(() => String, { description: 'role of the user' })
  role: string;
}
