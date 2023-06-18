import { IsDniNotRegistered } from './decorators/dni-not-registered.decorator';
import { Person } from './entities/person.entity';

export const PersonProviders = [
  {
    provide: 'PERSON_REPO',
    useValue: Person,
  },
];
