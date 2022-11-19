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
    const userId = createExpoPushTokenDto.userId;
    let response: string;
    const token = await this.notificationsRepository.findOne({
      where: { userId: userId },
    });
    console.log('old Push Token');
    console.log(token);

    if (token) {
      response = `Push Token for ${userId} exist`;
    } else {
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
