import { forwardRef, Module } from '@nestjs/common';
import { DriverService } from './driver.service';
import { DriverController } from './driver.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from 'src/common/auth.module';
import { CommonModule } from 'src/common/common.module';
import { Driver } from './entities/driver.entity';

@Module({
  imports: [
    // forwardRef(() => AuthModule),
    TypeOrmModule.forFeature([Driver]),
  ],
  controllers: [DriverController],
  providers: [DriverService],
  exports: [DriverService, TypeOrmModule],
})
export class DriverModule {}
