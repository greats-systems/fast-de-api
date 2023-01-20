
import { CreateClientDto } from './create-client.dto';

export class UpdateClientDTO extends PartialType(CreateClientDto) {
  userId: string;
  firstName: string;
  lastName: string;
  phone: string;
  role: string;
}
