import {
  registerDecorator,
  ValidationOptions,
  ValidatorConstraint,
  ValidatorConstraintInterface,
} from 'class-validator';
import { CajasService } from '../cajas.service';

@ValidatorConstraint({ name: 'IdIdCajaRegistered', async: true })
export class IsIdCajaRegistered implements ValidatorConstraintInterface {
  constructor(private readonly _service: CajasService) {}

  async validate(value: string) {
    const caja = await this._service.findOne(value);
    return caja === null;
  }
}

export function IdCajaRegistered(opts?: ValidationOptions) {
  return function (obj: object, propertyName: string) {
    registerDecorator({
      target: obj.constructor,
      propertyName,
      options: opts,
      constraints: [],
      validator: IsIdCajaRegistered,
    });
  };
}
