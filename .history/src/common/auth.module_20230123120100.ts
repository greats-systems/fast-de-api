import { forwardRef, Module } from '@nestjs/common';
import { ConfigModule } from './config.module';
import { AuthService } from './auth/auth.service';
import { UsersModule } from '../users/users.module';
import { JwtModule } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';
import { JwtStrategy } from './auth/jwt.strategy.service';
import { JwtService } from '@nestjs/jwt';
import { ClientService } from 'src/client/client.service';
import { ClientModule } from 'src/client/client.module';
import { DriverService } from 'src/driver/driver.service';
import { DriverModule } from 'src/driver/driver.module';

@Module({
  imports: [
    ConfigModule,
    forwardRef(() => UsersModule),
    ClientModule,
    DriverModule,
    JwtModule.registerAsync({
      useFactory: (configService: ConfigService) => ({
        secret: configService.get<string>('JWT_SECRET'),
        signOptions: { expiresIn: '6000s' },
      }),
      inject: [ConfigService],
    }),
  ],
  contr
  providers: [AuthService,ClientService,DriverService, JwtStrategy],
  exports: [AuthService],
})
export class AuthModule {}
