import { Empleado } from './entities/empleado.entity';

export const EmpleadoProviders = [
  {
    provide: 'EMPLEADO_REPO',
    useValue: Empleado,
  },
];
