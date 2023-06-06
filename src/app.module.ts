import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { SequelizeService } from './sequelize/sequelize.service';
import { ConfigModule } from '@nestjs/config';
import { ConfigModuleOpt } from './config/configModuleOptions';
import { SequelizeModule } from './sequelize/sequelize.module';
import { PersonModule } from './person/person.module';

@Module({
  imports: [AuthModule, UsersModule, ConfigModule.forRoot(ConfigModuleOpt), SequelizeModule, PersonModule],
  controllers: [AppController],
  providers: [AppService, SequelizeService],
})
export class AppModule {}
