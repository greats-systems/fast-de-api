import { Field } from "@nestjs/graphql";

export class CreateParcelDto {
    
  phone: string;
  @Field(() => String, { description: 'pin of the user' })
  pin: string;
  @Field(() => String, { description: 'role of the user' })
  role: string;
}
