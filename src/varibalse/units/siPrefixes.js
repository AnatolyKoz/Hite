export const SiPrefixes = {
  MILLI: {
    'value': -3,
    'text': 'Милли',
  },
  CENTI: {
    'value': -2,
    'text': 'Санти',
  },
  DECI: {
    'value': -1,
    'text': 'Деци',
  },
  KILO: {
    'value': 3,
    'text': 'Килло',
  },
};

const getSiPrefix = (type) => {
  switch (type) {
    case ('MILLI'):
      return SiPrefixes.MILLI;
    case ('CENTI'):
      return SiPrefixes.CENTI;
    case ('DECI'):
      return SiPrefixes.DECI;
    case ('KILO'):
      return SiPrefixes.KILO;
    default:
      return {
        'value': 0,
        'text': '',
      };
  }
};

export default getSiPrefix;
