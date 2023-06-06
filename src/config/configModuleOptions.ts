import { ConfigModuleOptions } from '@nestjs/config';
import { validate } from './env.validation';
import config from './configuration';

export const ConfigModuleOpt: ConfigModuleOptions = {
  load: [config],
  envFilePath: ['.env', '.env.development', '.env.production'],
  validate,
  expandVariables: true,
};
