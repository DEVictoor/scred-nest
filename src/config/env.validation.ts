import { plainToInstance } from 'class-transformer';
import { validateSync } from 'class-validator';
import { EnviromentVariables } from './EnviromentVariables';

export function validate(config: Record<string, unknown>) {
  const validateConfig = plainToInstance(EnviromentVariables, config, {
    enableImplicitConversion: true,
  });

  const errors = validateSync(validateConfig, { skipMissingProperties: false });

  if (errors.length > 0) throw new Error(errors.toString());

  return validateConfig;
}
