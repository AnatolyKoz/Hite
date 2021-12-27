/**
 *  Its value object  which contains preview for Recipe
 */
class RecipePreview {
  id: number;
  name: string;

  /**
  *  @constructor
  *  @param {number} id
  *  @param {string} name
  */
  constructor(id: number, name: string) {
    this.id = id;
    this.name = name;
  }
}

export default RecipePreview;
