import {action, makeObservable, observable} from 'mobx';
import RecipePreview from '../domain/Recipe/RecipePreview';
import {RecipeService} from '../fundamental/dataAccessServices/RecipeService';
import Statuses from '../utilities/Statuses';

/**
 *
 *  Its  @class which contains interaction logic and state for component SearchStore
 *  @name RecipeSearchStoreRESTs
 */
export class RecipeSearchStore {
  recipeService: RecipeService;
  recipePreviews: RecipePreview[] = undefined;
  status: Statuses;

  /**
   * @constructor
   * @param {RecipeService} recipeService
  */
  constructor(recipeService: RecipeService) {
    this.status = Statuses.UNINITIALIZED;
    this.recipeService = recipeService;
    makeObservable(this, {
      status: observable,
      getRecipePreviewsError: action,
      getRecipePreviewsSucceses: action,
    });
  }

  /**
   * initial ProductPreview for search
   * @method
   * @return {void}
  */
  getRecipePreviews(): void {
    if (this.status !== Statuses.UNINITIALIZED) return;
    this.status = Statuses.LOADING;
    this.recipeService.getRecipesPreview().then((previews) => {
      this.getRecipePreviewsSucceses(previews);
    });
  }

  /**
   * initial ProductPreview for search
   * @method
   * @param {RecipePreview} previews data for set
   * @return {void}
   * 
  */
  getRecipePreviewsSucceses(previews: RecipePreview[]): void {
    this.status = Statuses.READY;
    this.recipePreviews = previews;
  }


  /**
   * set error for requst
   * @return {void}
   *
  */
  getRecipePreviewsError(): void {
    this.status = Statuses.ERROR;
  }
}

