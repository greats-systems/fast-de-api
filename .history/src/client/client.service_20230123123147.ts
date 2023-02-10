import { BadRequestException, forwardRef, Inject, Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { AuthService } from 'src/common/auth/auth.service';
import { Repository } from 'typeorm';
import { CreateClientDto } from './dto/create-client.dto';
import { LoginUserInput, VerifyUserOTPInput } from './dto/login-client.dto';
import { UpdateClientDTO } from './dto/update-client.dto';
import { Client } from './entities/client.entity';
import * as bcrypt from 'bcrypt';


@Injectable()
export class ClientService {
  constructor(
    @InjectRepository(Client)
    private readonly clientRepository: Repository<Client>,
    @Inject(forwardRef(() => AuthService))
    private readonly authService: AuthService,
    ) {}

  async findOne(clientId: string): Promise<Client> {
    const client = await this.clientRepository.findOne({
      where: { clientId: clientId },
    });
    if (!client) {
      throw new NotFoundException(`Client #${clientId} not found`);
    }
    return client;
  }



  async getClientProfile(token: string): Promise<Client> {
    const decodedser = await this.authService.decodeUserToken(token);
    let client;
    if (decodedser) {
      client = await this.clientRepository.findOne({
        where: { clientId: decodedser.sub },
      });
      console.log('getClientProfile');
      console.log(decodedser.sub);
    } else {
      throw new NotFoundException(`Client token #${token} not valid`);
    }

    if (!client) {
      throw new NotFoundException(`Client #${decodedser.sub} not found`);
    }
    return client;
  }

  async findOneByPhone(phone: string): Promise<Client> {
    const client = await this.clientRepository.findOne({ where: { phone: phone } });
    
    if (!client) {  
      throw new NotFoundException(`Client #${phone} not found`);
    }
    return client;
  }

  async updateClientProfile(data): Promise<Client> {
    console.log('updateClientProfile data')
    console.log(data)
    let clientId = data.clientId
    let updateClientInput = data.data
    console.log('updateClientProfile clientId')
    const client = await this.clientRepository.preload({
      clientId: clientId,
      ...updateClientInput,
    });


    if (!client) {
      throw new NotFoundException(`Client #${clientId} not found`);
    }
    let update =  await this.clientRepository.save(client)
    console.log('success updated Client Profile')
    console.log(update)
    return update;
  }

  async remove(clientId: string): Promise<Client> {
    const client = await this.findOne(clientId);
    await this.clientRepository.remove(client);
    return {
      clientId: clientId,
      phone: '',
      pin: '',
      firstName: '',
      lastName: '',
      role: '',
      rides: [],
    };
  }
}
