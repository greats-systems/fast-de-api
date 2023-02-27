import { CreateClientDto } from './create-client.dto';

export class UpdateClientDTO  {
  clientId: string;
  firstName: string;
  lastName: string;
  phone: string;
  role: string;
}
