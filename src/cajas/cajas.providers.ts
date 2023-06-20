import { Agencia } from 'src/agencias/entities/agencia.entity';
import { Caja } from './entities/caja.entity';

export const CajasProviders = [
  {
    provide: 'CAJA_REPO',
    useValue: Caja,
  },
];
