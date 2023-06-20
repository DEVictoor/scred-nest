import {
  registerDecorator,
  ValidationOptions,
  ValidatorConstraint,
  ValidatorConstraintInterface,
} from 'class-validator';
import { CajasService } from '../cajas.service';

@ValidatorConstraint({ name: 'IsNombreCajaRegistered', async: true })
export class IsNombreCajaRegistered implements ValidatorConstraintInterface {
  constructor(private readonly _service: CajasService) {}

  async validate(value: any) {
    const caja = await this._service.findOne(value);
    return caja === null;
  }
}

export function NombreCajaNotRegistered(options?: ValidationOptions) {
  return function (o: Object, prop: string) {
    registerDecorator({
      target: o.constructor,
      propertyName: prop,
      options,
      constraints: [],
      validator: IsNombreCajaRegistered,
    });
  };
}
