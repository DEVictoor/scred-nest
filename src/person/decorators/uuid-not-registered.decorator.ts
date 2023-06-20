import { PersonService } from '../person.service';
import {
  ValidationOptions,
  registerDecorator,
  ValidatorConstraint,
  ValidatorConstraintInterface,
} from 'class-validator';

@ValidatorConstraint({ name: 'IsIdPersonNotRegistered', async: true })
export class IsIdPersonNotRegistered implements ValidatorConstraintInterface {
  constructor(private readonly _person: PersonService) {}

  async validate(value: string) {
    const person = await this._person.findOne(value);
    return person === null;
  }
}

export function IdPersonNotRegistered(validateOptions?: ValidationOptions) {
  return function (obj: object, properyName: string) {
    registerDecorator({
      target: obj.constructor,
      propertyName: properyName,
      options: validateOptions,
      constraints: [],
      validator: IsIdPersonNotRegistered,
    });
  };
}
