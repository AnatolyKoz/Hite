import SiPrefixes from './SiPrefixes';
import UnitType from './UnitRype';


/**
 *  Its @readonly domain @class which contains Product characterizing
 */
class Unit {
  readonly value: number;
  readonly type: UnitType;
  readonly SiPrefix: SiPrefixes;

  /**
  *  @constructor
  *  @param {number} value
  *  @param {UnitType} type
  *  @param {SiPrefixes} SiPrefix
  */
  constructor(value: number, type: UnitType, SiPrefix: SiPrefixes) {
    this.value = value;
    this.type = type;
    this.SiPrefix = SiPrefix;
  }
}

export default Unit;
