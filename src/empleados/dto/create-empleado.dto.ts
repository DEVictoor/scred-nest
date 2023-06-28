import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsNotEmpty, IsOptional, IsString, IsUUID } from 'class-validator';
import { IdCajaRegistered } from 'src/cajas/decorators/IsIdCajaRegistered.decorator';
import { IdPersonNotRegistered } from 'src/person/decorators/uuid-not-registered.decorator';
import { IdRoleNotRegistered } from 'src/roles/decorators/idnotregistered.decorator';

export class CreateEmpleadoDto {
  @IsUUID('4', { message: 'El idempleado no es un uuid' })
  @IdPersonNotRegistered({ message: 'No se encuentra el id para persona' })
  @ApiProperty()
  idperson: string;

  @IsUUID('4', { message: 'El idrol no es un uuid' })
  @IdRoleNotRegistered({ message: 'No se encuentra el id para rol' })
  @ApiProperty()
  idrole: string;

  @IsUUID('4', { message: 'El id caja debe ser de tipo UUID' })
  @IdCajaRegistered({ message: 'El id caja no existe' })
  @ApiProperty()
  idcaja: string;

  // TODO: i have to add enum
  @IsString({ message: 'El estado debe ser de tipo string' })
  @IsNotEmpty({ message: 'El estado no puede estar vacio' })
  @ApiProperty()
  estado: string;

  @IsString({ message: 'La clave admin debe ser de tipo string' })
  @IsNotEmpty({ message: 'La clave no puede estar vacia' })
  @IsOptional()
  @ApiPropertyOptional()
  claveadmin?: string;
}
