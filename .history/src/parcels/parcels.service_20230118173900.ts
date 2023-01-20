import { forwardRef, Inject, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateClientDto } from 'src/client/dto/create-client.dto';
import { Client } from 'src/client/entities/client.entity';
import { AuthService } from 'src/common/auth/auth.service';
import { Repository } from 'typeorm';
import { CreateParcelDto } from './dto/create-parcel.dto';
import { UpdateParcelDto } from './dto/update-parcel.dto';
import { Parcel } from './entities/parcel.entity';

@Injectable()
export class ParcelsService {
  constructor(
    @InjectRepository(Parcel)
    private readonly parcelRepository: Repository<Parcel>,
    @Inject(forwardRef(() => AuthService))
    private readonly authService: AuthService,
    ) {}

  async create(createClientDto: CreateClientDto) {
    const saltOrRounds = 10;
    const pin = createClientDto.pin;
    createClientDto.pin = await bcrypt.hash(pin, saltOrRounds);

    const clientSchema = this.clientRepository.create(createClientDto);
    const client = await this.clientRepository.save(clientSchema);
    console.log('new client')
    console.log(client)

    let loginData = {
      phone:createClientDto.phone,
      pin:pin,
    }
    console.log('newLogin')
    var newLogin = await this.loginClientPhone(loginData)
    console.log(newLogin)
    
    let response = {
      client,
      newLogin,
    }
    return response;
  }

  findAll() {
    return `This action returns all parcels`;
  }

  findOne(id: number) {
    return `This action returns a #${id} parcel`;
  }

  update(id: number, updateParcelDto: UpdateParcelDto) {
    return `This action updates a #${id} parcel`;
  }

  remove(id: number) {
    return `This action removes a #${id} parcel`;
  }
}
