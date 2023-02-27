import { CreateExpoPushTokenDto } from './create-notification.dto';
declare const UpdateExpoPushTokenDto_base: import("@nestjs/mapped-types").MappedType<Partial<CreateExpoPushTokenDto>>;
export declare class UpdateExpoPushTokenDto extends UpdateExpoPushTokenDto_base {
    expoPushToken: string;
}
export {};
