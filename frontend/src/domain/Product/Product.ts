

/**
 *  Its @readonly domain @class which contains Product characterizing
 */
class Product {
  readonly id: number;
  readonly name: string;
  readonly fats: number;
  readonly squirrels: number;
  readonly calorificValue: number;
  readonly carbohydrates: number;

  /**
  *  @constructor
  *  @param {number} id
  *  @param {string} name
  *  @param {number} fats
  *  @param {number} squirrels
  *  @param {number} calorificValue
  *  @param {number} carbohydrates
  */
  constructor(id: number, name: string, fats: number, squirrels: number,
      calorificValue: number, carbohydrates: number) {
    this.id = id;
    this.name = name;
    this.fats = fats;
    this.squirrels = squirrels;
    this.calorificValue = calorificValue;
    this.carbohydrates = carbohydrates;
  }
}

export default Product;
