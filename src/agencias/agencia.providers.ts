import { Caja } from 'src/cajas/entities/caja.entity';
import { Agencia } from './entities/agencia.entity';

export const AgenciaProviders = [
  {
    provide: 'AGENCIA_REPO',
    useValue: Agencia,
  },
  {
    provide: 'CAJA_REPO',
    useValue: Caja,
  },
];
