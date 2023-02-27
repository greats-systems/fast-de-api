import { AuthService } from 'src/common/auth/auth.service';
import { Repository } from 'typeorm';
import { Client } from './entities/client.entity';
export declare class ClientService {
    private readonly clientRepository;
    private readonly authService;
    constructor(clientRepository: Repository<Client>, authService: AuthService);
    findOne(clientId: string): Promise<Client>;
    getClientProfile(token: string): Promise<Client>;
    findOneByPhone(phone: string): Promise<Client>;
    updateClientProfile(data: any): Promise<Client>;
    remove(clientId: string): Promise<Client>;
}
