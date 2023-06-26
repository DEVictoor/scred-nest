import {
  registerDecorator,
  ValidationOptions,
  ValidatorConstraint,
  ValidatorConstraintInterface,
} from 'class-validator';
import { EmpleadosService } from '../empleados.service';

@ValidatorConstraint({ name: 'IsIdEmpleadoRegistered', async: true })
export class IsIdEmpleadoRegistered implements ValidatorConstraintInterface {
  constructor(private readonly _service: EmpleadosService) {}

  async validate(value: string) {
    const empleado = await this._service.findOne(value);
    return empleado === null;
  }
}

export function IdEmpleadoRegistered(options?: ValidationOptions) {
  return function (o: object, propertyName: string) {
    registerDecorator({
      target: o.constructor,
      propertyName,
      options,
      constraints: [],
      validator: IsIdEmpleadoRegistered,
    });
  };
}
