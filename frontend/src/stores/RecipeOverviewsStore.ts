import {action, makeObservable, observable} from 'mobx';
import PageCharacteristicsDTO from '../domain/dto/PageCharacteristicsDTO';
import Recipe from '../domain/Recipe/Recipe';
import {RecipeService} from '../fundamental/dataAccessServices/RecipeService';
import Statuses from '../utilities/Statuses';

/**
 *
 *  Its  @class which contains interaction logic and state for  recipes overviewes
 *  @name ProductStoreRESTs
 */
export class RecipeOverviewStore {
  recipeService: RecipeService;
  recipes: Recipe[] = [];
  pageCharacteristics: PageCharacteristicsDTO;
  status: Statuses;
  /**
   * @constructor
   * @param {RecipeService} recipeService - service
  */
  constructor(recipeService: RecipeService) {
    this.recipeService = recipeService;
    this.status = Statuses.UNINITIALIZED;
    this.pageCharacteristics = undefined;
    makeObservable(this, {
      status: observable,
      setPageNumber: action,
      setSortType: action,
      setPageSize: action,
      getPage: action,
      getPageSucceses: action,
      getPageError: action,
    });
  }

  /**
   * @param {string} sortBy - name of sql field which will be used by sort
   * @return {void}
  */
  setSortType(sortBy: string) {
    if (this.pageCharacteristics.sortBy === sortBy) return;
    this.pageCharacteristics = new PageCharacteristicsDTO(this.pageCharacteristics.number,
        this.pageCharacteristics.sortBy, this.pageCharacteristics.pageSize);
    this.getPage(this.pageCharacteristics);
  }

  /**
   * @param {number} pageSize - size of page
   * @return {void}
  */
  setPageSize(pageSize: number) {
    if (this.pageCharacteristics.pageSize === pageSize) return;
    this.pageCharacteristics = new PageCharacteristicsDTO(this.pageCharacteristics.number,
        this.pageCharacteristics.sortBy, pageSize);
    this.getPage(this.pageCharacteristics);
  }

  /**
   * @param {number} pageNumber - number of page which will take
   * @return {void}
  */
  setPageNumber(pageNumber: number) {
    if (this.pageCharacteristics.number === pageNumber) return;
    this.pageCharacteristics = new PageCharacteristicsDTO(pageNumber,
        this.pageCharacteristics.sortBy, this.pageCharacteristics.pageSize);
    this.getPage(this.pageCharacteristics);
  }

  /**
   * @param {PageCharacteristicsDTO} pageCharacteristicsDTO - data of page wich we wont to get
   * @return {void}
  */
  getPage(pageCharacteristicsDTO : PageCharacteristicsDTO) {
    if (this.pageCharacteristics) {
      if (pageCharacteristicsDTO.number === this.pageCharacteristics.number &&
      pageCharacteristicsDTO.sortBy === this.pageCharacteristics.sortBy &&
      pageCharacteristicsDTO.pageSize === this.pageCharacteristics.pageSize) return;
    }
    this.status = Statuses.LOADING;
    this.pageCharacteristics = pageCharacteristicsDTO;
    this.recipeService.getPage(pageCharacteristicsDTO)
        .then((recipes) => this.getPageSucceses(recipes))
        .catch((err) => this.getPageError());
  }

  /**
   * @param {Recipe[]} recipes - recipes wich we wont to set
   * @return {void}
  */
  getPageSucceses(recipes: Recipe[]) {
    this.recipes = recipes;
    this.status = Statuses.READY;
  }

  /**
   * @return {void}
  */
  getPageError() {
    this.status = Statuses.ERROR;
  }
}

export default RecipeOverviewStore;
