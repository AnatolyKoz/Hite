import {SiPrefixes} from './siPrefixes';
import {UnitsType} from './unitsType';

export const units = [
  {
    label: UnitsType.MASS.text,
    value: {
      UnitType: UnitsType.MASS,
      SiPrefixes: null,
    },
  },
  {
    label: SiPrefixes.KILO.text + UnitsType.MASS.text,
    value: {
      UnitType: UnitsType.MASS,
      SiPrefixes: 'KILO',
    },
  },
  {
    label: UnitsType.VOLUME.text,
    value: {
      UnitType: UnitsType.MASS,
      SiPrefixes: null,
    },
  },
];
