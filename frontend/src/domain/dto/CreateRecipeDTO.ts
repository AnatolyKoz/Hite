/* eslint-disable require-jsdoc */

import RecipeCookingStage from '../Recipe/RecipeCookingStage';
import RecipeProduct from '../Recipe/RecipeProduct';


class CreateRecipeDTO {
  readonly name: string;
  readonly cookingStages: RecipeCookingStage[];
  readonly products: RecipeProduct[];

  constructor(name: string, cookingStages:RecipeCookingStage[], products: RecipeProduct[]) {
    this.name = name;
    this.cookingStages = cookingStages;
    this.products = products;
  }
}

export default CreateRecipeDTO;
