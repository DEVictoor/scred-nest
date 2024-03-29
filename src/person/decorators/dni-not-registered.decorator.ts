import { PersonService } from '../person.service';
import {
  ValidationOptions,
  registerDecorator,
  ValidatorConstraint,
  ValidatorConstraintInterface,
} from 'class-validator';

@ValidatorConstraint({ name: 'IsDniNotRegistered', async: true })
export class IsDniNotRegistered implements ValidatorConstraintInterface {
  constructor(private readonly _person: PersonService) {}

  async validate(value: any) {
    const person = await this._person.findOneByDni(value);
    return person === null;
  }
}

export function DniNotRegistered(validateOptions?: ValidationOptions) {
  return function (obj: object, properyName: string) {
    registerDecorator({
      target: obj.constructor,
      propertyName: properyName,
      options: validateOptions,
      constraints: [],
      validator: IsDniNotRegistered,
    });
  };
}
