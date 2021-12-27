import {sortType} from '../../config/pageCharacteristics/recipePageCharacteristics';

/**
* Its value objeact for rest requsts
*  @class
*/
export class PageCharacteristicsDTO {
  number: number;
  sortBy: string;
  pageSize: number;

  /**
  *  @constructor
  *  @param {number} number - number of page
  *  @param {string} sortBy - field by which to sort
  *  @param {number} pageSize - size of page min size 4
  */
  constructor(
      number: number = 0,
      sortBy: string = sortType[1].sortBy.toString(),
      pageSize: number = 10) {
    this.number = number;
    this.pageSize = pageSize;
    this.sortBy = sortBy;
  }

  isFilled = () => {
    return ((this.number !== null) && (this.pageSize !== null) && (this.sortBy !== null) &&
    !isNaN(this.number) && !isNaN(this.pageSize));
  }
}


export default PageCharacteristicsDTO;
