import { Controller, Get, Post, Req } from '@nestjs/common';
import { RegisterClientInput } from './dto/register-client.input';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {

    @Get()
    getUser() {
        return 'user'
    }
}