import axios from 'axios';
import ProductPreview from '../../domain/Product/ProductPreview';
import Product from '../../domain/Product/Product';
import {plainToClass} from 'class-transformer';
import {AuthenticationService} from '../security/AuthenticationService';
export interface ProductService {
  getProductByID(ID: number): Promise<Product>
  getProductsPreview(): Promise<ProductPreview[]>
}

/**
 *
 *  Its SINGLETON @class which contains interaction logic for Product on REST
 *  @name ProductServiceREST
 */
class ProductServiceREST implements ProductService {
  /**
  * @method
  * @return {Product}
  * @param {number} ID
  */
  async getProductByID(ID: number): Promise<Product> {
    return new Promise((resolve, reject) => {
      axios.get('/product/byId?id=' + ID,
          {headers: AuthenticationService.getAuthHeader()}).then((respone) => {
        resolve(plainToClass(Product, respone.data as Object));
      }).catch((err) => reject(err));
    });
  }

  /**
  * @method
  * @return {ProductPreview}
  */
  async getProductsPreview(): Promise<ProductPreview[]> {
    return new Promise((resolve, reject) => {
      axios.get('/products/productPresences',
          {headers: AuthenticationService.getAuthHeader()} ).then((respone) => {
        resolve(plainToClass(ProductPreview, respone.data as Object[]));
      }).catch((err) => reject(err));
    });
  }
}

export const ProductService = new ProductServiceREST();
