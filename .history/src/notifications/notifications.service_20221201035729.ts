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
    
    const userId = createExpoPushTokenDto.userId;
    let response: string;
    const token = await this.notificationsRepository.findOne({
      where: { userId: userId },
    });
    console.log('Known device Push Token');
    console.log('old expoPushToken');
    console.log(createExpoPushTokenDto.expoPushToken);



    if (token) {
      response = `Push Token for ${userId} exist`;
    }
    if (token.expoPushToken !== createExpoPushTokenDto.expoPushToken) {
      console.log('updating Push Token ....');
      await this.notificationsRepository.createQueryBuilder('users')
      .delete()
      .from(Notifications)
      .where("userId = :userId", { userId: createExpoPushTokenDto.userId })
      .execute()
      const savedToken = await this.notificationsRepository.save(
        createExpoPushTokenDto,
      );
      response = `Push Token ${savedToken} for ${userId} updated`;
      
    }else {
      const savedToken = await this.notificationsRepository.save(
        createExpoPushTokenDto,
      );
      response = `Push Token for ${userId} successfully added`;
    }

    return response;
  }

  findAll() {
    return `This action returns all notifications`;
  }

  async getExpoPushToken(userId: string) {
    console.log(`get user ${userId}  stored pushToken`);

    const token = await this.notificationsRepository.findOne({
      where: { userId: userId },
    });
    console.log('requested user pushToken');
    console.log(token);
    if (!token) {
      throw new NotFoundException(
        `Token  for user with id ${userId} not found`,
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
