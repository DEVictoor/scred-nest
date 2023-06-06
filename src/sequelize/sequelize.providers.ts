import { ConfigModule, ConfigService } from '@nestjs/config';
import { Sequelize, Options } from 'sequelize';

export const databaseProvider = [
  {
    provide: 'Sequelize',
    useFactory: async (configService: ConfigService) => {
      const db_credentials = configService.get<Options>('psql_database');
      const sequelize = new Sequelize({
        dialect: 'postgres',
        ...db_credentials,
      });
      await sequelize.sync();
      return sequelize;
    },
    inject: [ConfigService],
  },
];
