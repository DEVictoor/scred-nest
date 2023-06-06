import { IsEnum, IsNumber, IsOptional, IsString } from 'class-validator';
import { Environment } from 'src/enums/environment';

export class EnviromentVariables {
  @IsEnum(Environment)
  NODE_ENV: Environment;

  @IsNumber()
  PORT: number;

  @IsString()
  PSQL_USER: string;

  @IsString()
  PSQL_PASSWORD: string;

  @IsNumber()
  PSQL_PORT: number;

  @IsString()
  PSQL_DATABASE: string;

  @IsString()
  PSQL_HOST: string;

  @IsString()
  @IsOptional()
  DATABASE_URL: string;
}
