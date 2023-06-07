import { ConfigService } from '@nestjs/config';
import { Options } from 'sequelize';
import { Sequelize } from 'sequelize-typescript';
import { Person } from 'src/person/entities/person.entity';

export const DatabaseProviders = [
  {
    provide: 'Sequelize',
    useFactory: async (configService: ConfigService) => {
      const db_credentials = configService.get<Options>('psql_database');
      const sequelize = new Sequelize({
        dialect: 'postgres',
        ...db_credentials,
      });
      // sequelize.addModels([__dirname + '/**/entities/*.entity.ts']);
      sequelize.addModels([Person]);
      await sequelize.sync({ force: true });
      return sequelize;
    },
    inject: [ConfigService],
  },
];
