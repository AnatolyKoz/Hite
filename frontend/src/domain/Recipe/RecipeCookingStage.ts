

/**
 *  Its @readonly value object class which contains description of recipe cooking stage
 */
class RecipeCookingStage {
  readonly header: string;
  readonly paragraph: string;

  /**
  *  @constructor
  *  @param {string} header - header of stage
  *  @param {string} paragraph - main value of stage
  */
  constructor(header: string, paragraph: string) {
    this.header = header;
    this.paragraph = paragraph;
  }
}

export default RecipeCookingStage;
