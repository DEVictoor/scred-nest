import { ConfigService } from '@nestjs/config';
import { Options } from 'sequelize';
import { Sequelize } from 'sequelize-typescript';
import { Agencia } from 'src/agencias/entities/agencia.entity';
import { Caja } from 'src/cajas/entities/caja.entity';
import { Empleado } from 'src/empleados/entities/empleado.entity';
import { Moneda } from 'src/monedas/entities/moneda.entity';
import { Person } from 'src/person/entities/person.entity';
import { Role } from 'src/roles/entities/role.entity';
import { User } from 'src/users/entities/user.entity';

export const DatabaseProviders = [
  {
    provide: 'Sequelize',
    useFactory: async (configService: ConfigService) => {
      const db_credentials = configService.get<Options>('psql_database');

      const sequelize = new Sequelize({
        dialect: 'postgres',
        ...db_credentials,
      });

      // TODO: i have to improve this with path string
      sequelize.addModels([
        Role,
        Moneda,
        Agencia,
        Caja,
        Person,
        Empleado,
        User,
      ]);

      await sequelize.sync();
      // await sequelize.sync({ force: true });
      return sequelize;
    },
    inject: [ConfigService],
  },
];
