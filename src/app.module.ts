import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { ConfigModule } from '@nestjs/config';
import { ConfigModuleOpt } from './config/configModuleOptions';
import { DatabaseModule } from './database/database.module';
import { PersonModule } from './person/person.module';
import { EmpleadosModule } from './empleados/empleados.module';
import { RolesModule } from './roles/roles.module';
import { CajasModule } from './cajas/cajas.module';
import { MonedasModule } from './monedas/monedas.module';
import { AgenciasModule } from './agencias/agencias.module';
import { SeedersModule } from './seeders/seeders.module';

@Module({
  imports: [
    DatabaseModule,
    AuthModule,
    UsersModule,
    ConfigModule.forRoot(ConfigModuleOpt),
    PersonModule,
    EmpleadosModule,
    RolesModule,
    CajasModule,
    MonedasModule,
    AgenciasModule,
    SeedersModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
