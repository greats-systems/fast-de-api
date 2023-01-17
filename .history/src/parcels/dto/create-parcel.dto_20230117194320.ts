import { Field } from "@nestjs/graphql";

export class CreateParcelDto {
    
  phone: string;
  pin: string;
  @Field(() => String, { description: 'role of the user' })
  role: string;
}
