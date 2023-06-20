import { ArgumentMetadata, Injectable, PipeTransform } from '@nestjs/common';
import { PersonService } from 'src/person/person.service';
import { CreateEmpleadoDto } from '../dto/create-empleado.dto';

@Injectable()
export class IdPersonPipe implements PipeTransform<any> {
  constructor(private readonly _person: PersonService) {}

  async transform(value: CreateEmpleadoDto, metadata: ArgumentMetadata) {
    const uuid = value.idperson;
    const person = await this._person.findOne(uuid);
    return { ...value, person };
  }
}
