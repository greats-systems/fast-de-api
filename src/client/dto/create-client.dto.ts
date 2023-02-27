import { Field } from "@nestjs/graphql";
import { Column } from "typeorm";

export class CreateClientDto {
  @Column({nullable: true})
  @Field(() => String, { description: 'firstName of the user' })
  firstName?: string;
  @Column({nullable: true})
  @Field(() => String, { description: 'firstName of the user' })
  lastName?: string;
  @Field(() => String, { description: 'phone of the user' })
  phone: string;
  @Field(() => String, { description: 'pin of the user' })
  pin: string;
  @Field(() => String, { description: 'role of the user' })
  role: string;
}
