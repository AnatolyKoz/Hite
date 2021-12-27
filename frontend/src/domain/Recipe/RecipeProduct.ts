import {jsonProperty} from '../../utilities/ReflectUtils';
import Unit from '../Unit/Unit';

/**
 *  Its @readonly value object class which contains ID of product
 */
class RecipeProduct {
  readonly id: number;
  @jsonProperty('value')
  readonly value: Unit;
  /**
  *  @constructor
  *  @param {number} id
  *  @param {Unit} value
  */
  constructor(id: number, value: Unit) {
    this.id = id;
    this.value = value;
  }
}

export default RecipeProduct;
