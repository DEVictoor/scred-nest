import { Transform } from 'class-transformer';
import { IsUUID } from 'class-validator';
import { Person } from 'src/person/entities/person.entity';
import { PersonService } from 'src/person/person.service';

export class CreateEmpleadoDto {
  @IsUUID('4', { message: 'El idempleado no es un uuid' })
  // @Transform(({value}) =>  )
  idperson: Person;
}
