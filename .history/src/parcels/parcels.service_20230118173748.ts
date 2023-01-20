import { Injectable } from '@nestjs/common';
import { CreateParcelDto } from './dto/create-parcel.dto';
import { UpdateParcelDto } from './dto/update-parcel.dto';

@Injectable()
export class ParcelsService {
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
    return 'This action adds a new parcel';
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
