/* eslint-disable require-jsdoc */
import Unit from '../Unit/Unit';
import RecipeProduct from '../Recipe/RecipeProduct';


class WorkbenchProduct {
  constructor(name: string, id: number, unit: Unit) {
    this.name = name;
    this.recipeProduct = new RecipeProduct(id, unit);
  }

  name: string;
  recipeProduct: RecipeProduct;
}
export default WorkbenchProduct;
