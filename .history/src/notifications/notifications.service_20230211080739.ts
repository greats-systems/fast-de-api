import {
  forwardRef,
  Inject,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateExpoPushTokenDto } from './dto/create-notification.dto';
import { UpdateExpoPushTokenDto } from './dto/update-notification.dto';
import { Notifications } from './entities/notification.entity';

@Injectable()
export class NotificationsService {
  constructor(
    @InjectRepository(Notifications)
    private notificationsRepository: Repository<Notifications>,
  ) {}

  async create(createExpoPushTokenDto: CreateExpoPushTokenDto) {
    console.log('ExpoPushTokenDto')
    console.log(createExpoPushTokenDto)
    
    const phone = createExpoPushTokenDto.phone;
    let response: string;
    const token = await this.notificationsRepository.findOne({
      where: { phone: phone },
    });
    console.log('Known device Push Token');
    console.log('old expoPushToken');
    console.log(createExpoPushTokenDto.expoPushToken);

    if (token) {
      response = `Push Token for ${phone} exist`;
    }else {
      await this.notificationsRepository.save(
        createExpoPushTokenDto,
      );
      response = `Push Token for ${phone} successfully added`;
    }

    if (token !== null && token.expoPushToken !== createExpoPushTokenDto.expoPushToken) {
      console.log('updating Push Token ....');
      await this.notificationsRepository.createQueryBuilder('users')
      .delete()
      .from(Notifications)
      .where("phone = :phone", { phone: createExpoPushTokenDto.phone })
      .execute()
      const savedToken = await this.notificationsRepository.save(
        createExpoPushTokenDto,
      );
      response = `Push Token ${savedToken} for ${phone} updated`;
      console.log('new expoPushToken');
      console.log(token.expoPushToken);
    }
    // else {
    //   const savedToken = await this.notificationsRepository.save(
    //     createExpoPushTokenDto,
    //   );
    //   response = `Push Token for ${phone} successfully added`;
    // }

    return response;
  }

  findAll() {
    return `This action returns all notifications`;
  }

  async getExpoPushToken(phone: string) {
    console.log(`get user ${phone}  stored pushToken`);
    const token = await this.notificationsRepository.findOne({
      where: { phone: phone },
    });
    console.log('requested user pushToken');
    console.log(token);
    if (!token) {
      throw new NotFoundException(
        `Token  for user with id ${phone} not found`,
      );
    }
    return token.expoPushToken;
  }

  async getDriverExpoPushToken(userRole: string) {
    const token = await this.notificationsRepository.findOne({
      where: { userRole: userRole },
    });

    if (!token) {
      throw new NotFoundException(`Token for ${userRole} not found`);
    }
    return token.expoPushToken;
  }

  update(id: number, updateExpoPushTokenDto: UpdateExpoPushTokenDto) {
    return `This action updates a #${id} notification`;
  }

  remove(id: number) {
    return `This action removes a #${id} notification`;
  }
}
