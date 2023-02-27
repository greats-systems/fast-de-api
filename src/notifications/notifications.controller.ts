import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { NotificationsService } from './notifications.service';
import { CreateExpoPushTokenDto } from './dto/create-notification.dto';
import { UpdateExpoPushTokenDto } from './dto/update-notification.dto';

@Controller('notifications')
export class NotificationsController {
  constructor(private readonly notificationsService: NotificationsService) {}

  @Post()
  create(@Body() createExpoPushTokenDto: CreateExpoPushTokenDto) {
    const expoPushToken = this.notificationsService.create(
      createExpoPushTokenDto,
    );
    return expoPushToken;
  }

  @Get()
  findAll() {
    return this.notificationsService.findAll();
  }

  @Get(':authToken')
  findOne(@Param('authToken') authToken: string) {
    return this.notificationsService.getExpoPushToken(authToken);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateExpoPushTokenDto: UpdateExpoPushTokenDto,
  ) {
    return this.notificationsService.update(+id, updateExpoPushTokenDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.notificationsService.remove(+id);
  }
}
