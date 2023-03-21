import { forwardRef, Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { CommonModule } from 'src/common/common.module';
import { AuthModule } from 'src/common/auth.module';
import { UsersController } from './users.controller';
import { GatewayConnectedUser } from './entities/gateway.connected.user.entity';

@Module({
  imports: [
    forwardRef(() => AuthModule),
    CommonModule,
    TypeOrmModule.forFeature([User, GatewayConnectedUser]),
  ],
  providers: [UsersService],
  exports: [UsersService, TypeOrmModule],
  controllers: [UsersController],
})
export class UsersModule {}
