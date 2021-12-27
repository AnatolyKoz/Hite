import {action} from 'mobx';
import Product from '../domain/Product/Product';
import {ProductService} from '../fundamental/dataAccessServices/ProductService';

export interface ProductStore {
  // void getProductByID(ID: BigInt);
}


/**
 *
 *  Its  @class which contains interaction logic and state for Product
 *  @name ProductStoreRESTs
 */
export class ProductStoreImple implements ProductStore {
  productService: ProductService;

  products: Product[] = [];

  /**
   * @constructor
   * @param {ProductService} productService
  */
  constructor(productService: ProductService) {
    this.productService = productService;
  }

  /**
   * @method
   * @return {Product} product
   * @param {BigInt} ID
  */
  @action getProductByID(ID : number) {
    return this.productService.getProductByID(ID);
  }
}

export default ProductStoreImple;
