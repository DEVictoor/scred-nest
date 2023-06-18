import { Role } from './entities/role.entity';

export const RolesProviders = [
  {
    provide: 'ROLE_REPO',
    useValue: Role,
  },
];
