import {rejects} from 'assert';
import axios from 'axios';
import {plainToClass} from 'class-transformer';
import CreateRecipeDTO from '../../domain/dto/CreateRecipeDTO';
import PageCharacteristicsDTO from '../../domain/dto/PageCharacteristicsDTO';
import Recipe from '../../domain/Recipe/Recipe';
import RecipePreview from '../../domain/Recipe/RecipePreview';
import {AuthenticationService} from '../security/AuthenticationService';

export interface RecipeService {
  getRecipesPreview(): Promise<RecipePreview[]>;
  getRecipeByID(ID: number): Promise<Recipe>
  getPage(pageCharacteristicsDTO: PageCharacteristicsDTO): Promise<Recipe[]>
  postCreateRecipe(recipeCharacteristicsDTO: CreateRecipeDTO) : Promise<boolean>;
}


/**
 *
 *  Its SINGLETON @class which contains interaction logic for Recipe on REST
 *  @name RecipeServiceREST
 */
class RecipeServiceREST implements RecipeService {
  /**
  * @method
  * @param {PageCharacteristicsDTO} pageCharacteristicsDTO
  * @return {Promise<Recipe>}
  */
  async getPage(pageCharacteristicsDTO: PageCharacteristicsDTO): Promise<Recipe[]> {
    return new Promise((resolve, reject) => {
      axios.get('/recipes/byPaging', {
        params: {
          'number': pageCharacteristicsDTO.number,
          'sortBy': 'difficulty',
          'pageSize': pageCharacteristicsDTO.pageSize,
        },
        headers: AuthenticationService.getAuthHeader(),
      }).then((response: any) => resolve(plainToClass(Recipe, response.data as Object[])))
          .catch((res) => reject(res));
    });
  }

  /**
  * @method
  * @return {Promise<RecipePreview>}
  */
  async getRecipesPreview(): Promise<RecipePreview[]> {
    return new Promise((resolve, reject) => {
      axios.get('/recipes/previews', {
        headers: AuthenticationService.getAuthHeader(),
      }).then((respone: any) => {
        resolve(plainToClass(RecipePreview, respone.data as Object[]));
      }).catch((err) => reject(err));
    });
  }

  /**
  * @method
  * @return{Recipe}
  * @param {BigInt} ID
  */
  async getRecipeByID(ID: number): Promise<Recipe> {
    return new Promise((resolve, rejcect) => {
      axios.get('/recipes/byId?id=' + ID, {
        headers: AuthenticationService.getAuthHeader(),
      }).then((response: any) => {
        resolve(plainToClass(Recipe, response.data));
      }).catch((err) => rejcect(err));
    });
  }


  /**
  * @method
  * @return{boolean} result of creataion
  * @param {CreateRecipeDTO} recipeCharacteristicsDTO data for creating recipe
  */
  async postCreateRecipe(recipeCharacteristicsDTO: CreateRecipeDTO): Promise<boolean> {
    return new Promise((resolve, reject) => {
      axios.post('/create/recipe', {
        'name': recipeCharacteristicsDTO.name,
        'cookingStages': recipeCharacteristicsDTO.cookingStages,
        'products': recipeCharacteristicsDTO.products,
      }, {
        headers: AuthenticationService.getAuthHeader(),
      })
          .then(() => resolve(true))
          .catch((err) => reject(new Error('Request error: ' + err)));
    });
  }
}

export const RecipeService = new RecipeServiceREST();
