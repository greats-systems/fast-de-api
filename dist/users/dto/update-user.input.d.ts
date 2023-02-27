import { CreateMobileUserDTO } from './create-user.input';
declare const UpdateUserInput_base: import("@nestjs/common").Type<Partial<CreateMobileUserDTO>>;
export declare class UpdateUserInput extends UpdateUserInput_base {
    userId: string;
    firstName: string;
    lastName: string;
    phone: string;
    password: string;
    role: string;
}
export {};
