import { Repository } from 'typeorm';
import { CreateExpoPushTokenDto } from './dto/create-notification.dto';
import { UpdateExpoPushTokenDto } from './dto/update-notification.dto';
import { Notifications } from './entities/notification.entity';
export declare class NotificationsService {
    private notificationsRepository;
    constructor(notificationsRepository: Repository<Notifications>);
    create(createExpoPushTokenDto: CreateExpoPushTokenDto): Promise<string>;
    findAll(): string;
    getExpoPushToken(phone: string): Promise<string>;
    getDriverExpoPushToken(userRole: string): Promise<string>;
    update(id: number, updateExpoPushTokenDto: UpdateExpoPushTokenDto): string;
    remove(id: number): string;
}
