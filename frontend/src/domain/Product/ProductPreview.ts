
/**
 *  Its @readonly value objcet  which contains preview for Product
 */
class ProductPreview {
  readonly id: number;
  readonly componentID: number;
  readonly name: string;

  /**
  *  @constructor
  *  @param {number} id
  *  @param {string} name
  */
  constructor(id: number, componentID: number, name: string) {
    this.componentID = componentID;
    this.id = id;
    this.name = name;
  }
}

export default ProductPreview;
