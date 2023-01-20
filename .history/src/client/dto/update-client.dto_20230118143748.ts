import { InputType, Field, Int, PartialType } from '@nestjs/graphql';
import { CreateClientDto } from './create-client.dto';

@InputType()
export class UpdateClientDTO extends PartialType(CreateClientDto) {
  userId: string;
  firstName: string;
  lastName: string;
  phone: string;
  role: string;
}
