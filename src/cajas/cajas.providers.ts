import { Agencia } from 'src/agencias/entities/agencia.entity';
import { Caja } from './entities/caja.entity';

export const CajasProviders = [
  {
    provide: 'Caja_Repo',
    useValue: Caja,
  },
  {
    provide: 'Agencia_Repo',
    useValue: Agencia,
  },
];
