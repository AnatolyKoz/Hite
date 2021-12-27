import {IJsonMetaData, jsonProperty} from '../../utilities/ReflectUtils';
import RecipeCookingStage from './RecipeCookingStage';
import RecipeProduct from './RecipeProduct';


/**
 *  Its @readonly domain class which contains recipe description
 */
class Recipe {
  readonly name: string;
  readonly id: number;
  readonly portions: number;
  readonly difficulty: number;

  readonly calorificValue: number;
  readonly carbohydrates: number;
  readonly squirrels: number;
  readonly fats: number;

  readonly cookingStages: RecipeCookingStage[];
  readonly productList: RecipeProduct[];

  /**
  *  @constructor
  */
  constructor() {
    this.id = undefined;
    this.portions = undefined;
    this.difficulty = undefined;
    this.calorificValue = undefined;
    this.name = undefined;
    this.carbohydrates = undefined;
    this.squirrels = undefined;
    this.fats = undefined;
    this.cookingStages = undefined;
    this.productList = undefined;
  }
}


export default Recipe;
