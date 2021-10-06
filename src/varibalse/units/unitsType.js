export const UnitsType = {
  MASS: {
    'value': 1,
    'text': 'грамм',
  },
  VOLUME: {
    'value': 3,
    'text': 'литр',
  },
};


const getType = (type) => {
  switch (type) {
    case ('MASS'):
      return UnitsType.MASS;
    case ('VOLUME'):
      return UnitsType.VOLUME;
    default:
      return null;
  }
};

export default getType;
