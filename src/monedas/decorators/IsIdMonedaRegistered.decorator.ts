import {
  ValidatorConstraint,
  ValidatorConstraintInterface,
  ValidationOptions,
  registerDecorator,
} from 'class-validator';
import { MonedasService } from '../monedas.service';

@ValidatorConstraint({ name: 'IsIdMonedaRegistered', async: true })
export class IsIdMonedaRegistered implements ValidatorConstraintInterface {
  constructor(private readonly _service: MonedasService) {}

  async validate(value: string) {
    const moneda = await this._service.findOne(value);
    return moneda === null;
  }
}

export function IdMonedaNotRegistered(options?: ValidationOptions) {
  return function (o: object, propertyName: string) {
    registerDecorator({
      target: o.constructor,
      propertyName,
      options,
      constraints: [],
      validator: IsIdMonedaRegistered,
    });
  };
}
