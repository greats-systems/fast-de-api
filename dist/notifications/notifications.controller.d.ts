import { NotificationsService } from './notifications.service';
import { CreateExpoPushTokenDto } from './dto/create-notification.dto';
import { UpdateExpoPushTokenDto } from './dto/update-notification.dto';
export declare class NotificationsController {
    private readonly notificationsService;
    constructor(notificationsService: NotificationsService);
    create(createExpoPushTokenDto: CreateExpoPushTokenDto): Promise<string>;
    findAll(): string;
    findOne(authToken: string): Promise<string>;
    update(id: string, updateExpoPushTokenDto: UpdateExpoPushTokenDto): string;
    remove(id: string): string;
}
