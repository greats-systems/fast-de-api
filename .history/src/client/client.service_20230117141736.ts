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

  async create(createClientDto: CreateClientDto) {
    const saltOrRounds = 10;
    const pin = createClientDto.pin;
    createClientDto.pin = await bcrypt.hash(pin, saltOrRounds);

    const clientSchema = this.clientRepository.create(createClientDto);
    const client = await this.clientRepository.save(clientSchema);
    let loginData = {
      phone:createClientDto.phone,
      pin:pin,
    }
    var newLogin = await this.loginClientPhone(loginData)
    let response = {
      client,
      newLogin,
    }
    return response;

  }

  async loginClientPhone(loginUserInput: LoginUserInput) {
    const user = await this.authService.validateClient(
      loginUserInput.phone,
      loginUserInput.pin,
    );
    if (!user) {
      throw new BadRequestException(`Phone or password are invalid`);
    } else {
      return this.authService.generateClientCredentials(user);
    }
  }

  async verifyClientOTP(verifyClientOTPInput: VerifyUserOTPInput) {
    const client = await this.authService.verifyUser(
      verifyClientOTPInput.client_id,
      verifyClientOTPInput.otp,
    );
    if (!client) {
      throw new BadRequestException(`otp is invalid`);
    } else {
      return this.authService.generateClientCredentials(client);
    }
  }
  // get all entity objects
  async findAll(): Promise<Array<Client>> {
    return await this.clientRepository.find();
  }


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
  async getDrivers(role: string): Promise<Array<Client>> {
    const clients = await this.clientRepository.find({ where: { role: role } });
    if (!clients) {
      throw new NotFoundException(`Clients ${role} not found`);
    }
    return clients;
  }

  async update(
    clientId: string,
    updateClientInput: UpdateClientDTO,
  ): Promise<Client> {
    const client = await this.clientRepository.preload({
      clientId: clientId,
      ...updateClientInput,
    });

    if (!client) {
      throw new NotFoundException(`Client #${clientId} not found`);
    }
    return this.clientRepository.save(client);
  }

  async remove(clientId: string): Promise<Client> {
    const client = await this.findOne(clientId);
    await this.clientRepository.remove(client);
    return {
      clientId: clientId,
      phone: '',
      pin: '',
      role: '',
      rides: [],
    };
  }
}
