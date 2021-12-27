import {makeAutoObservable} from 'mobx';
import Recipe from '../domain/Recipe/Recipe';
import {RecipeService} from '../fundamental/dataAccessServices/RecipeService';
import Statuses from '../utilities/Statuses';

/**
 *
 *  Its  @class which contains interaction logic and state for Recipe
 *  @name RecipeStoreRESTs
 */
export class RecipeStore {
  name: string = 'recipe store';
  recipeService: RecipeService;

  activeRecipe: Recipe;
  status: Statuses;
  /**
   * initial Recipe store for recipes
   * @constructor
   * @param {RecipeService} recipeService - data acess service
   *
  */
  constructor(recipeService: RecipeService) {
    this.recipeService = recipeService;
    this.activeRecipe = undefined;
    this.status = Statuses.UNINITIALIZED;
    makeAutoObservable(this);
  }

  /**
   * initial Recipe store for recipes
    * @param {bigint} id  id of recipe with we wont to get
   *
  */
  getRecipe(id: number) {
    this.status = Statuses.LOADING;
    this.recipeService.getRecipeByID(id)
        .then((recipe) => !(recipe.id === undefined) ?
        this.getRecipeSucceses(recipe): this.getRecipeError())
        .catch((err) => this.getRecipeError());
  }

  /**
   * called by getRecipe
   * function that is needed to synchronously set the recipe
  * @param {Recipe} recipe  recipe which will be set as active
   *
  */
  private getRecipeSucceses(recipe: Recipe) {
    this.activeRecipe = recipe;
    this.status = Statuses.READY;
  }

  /**
   * called by getRecipe
  *function that is needed to synchronously set error
  */
  private getRecipeError() {
    this.status = Statuses.ERROR;
  }
}

export default RecipeStore;
