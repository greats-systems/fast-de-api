import { forwardRef, Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersResolver } from './users.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { CommonModule } from 'src/common/common.module';
import { AuthModule } from 'src/common/auth.module';

@Module({
  imports: [
    forwardRef(() => AuthModule),
    CommonModule,
    TypeOrmModule.forFeature([User]),
  ],
  providers: [UsersResolver, UsersService],
  exports: [UsersService, TypeOrmModule],
})
export class UsersModule {}
