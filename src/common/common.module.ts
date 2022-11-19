import { Module } from '@nestjs/common';
import { GraphqlModule } from './graphql.module';
import { ConfigModule } from './config.module';
import { AuthModule } from './auth.module';
import { DatabaseModule } from './database.module';

@Module({
  imports: [ConfigModule, GraphqlModule, DatabaseModule, AuthModule],
  exports: [ConfigModule, GraphqlModule, DatabaseModule, AuthModule],
})
export class CommonModule {}
