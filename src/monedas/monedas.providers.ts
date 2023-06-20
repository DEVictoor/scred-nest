import { Moneda } from './entities/moneda.entity';

export const MonedasProviders = [
  {
    provide: 'MONEDA_REPO',
    useValue: Moneda,
  },
];
