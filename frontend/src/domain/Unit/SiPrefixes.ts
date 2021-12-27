/* eslint-disable no-unused-vars */
const enum SiPrefixes {
    MICRO = -6,
    MILLI = -3,
    CENTI = -2,
    DEFAULT = 0,
    DECI = -1,
    KILO = 3,
    MEGA = 6,
}

export const siPrefixesVaribalse = [
  {
    prefix: SiPrefixes.DEFAULT,
    text: 'грамм',
  },
  {
    prefix: SiPrefixes.KILO,
    text: 'КГ',
  },
];
export default SiPrefixes;


