/* eslint-disable require-jsdoc */
import {action, makeObservable, observable} from 'mobx';
import ProductPreview from '../domain/Product/ProductPreview';
import {ProductService} from '../fundamental/dataAccessServices/ProductService';
import Statuses from '../utilities/Statuses';


/**
 *
 *  Its  @class which contains interaction logic and state for component SearchStore
 *  @name ComponentSearchStore
 */
export class ProductSearchStore {
  productService: ProductService;

  status: Statuses;
  productPreviews: ProductPreview[] = [];

  /**
   * @constructor
   * @param {ProductService} productService
  */
  constructor(productService: ProductService) {
    this.productService = productService;
    this.status = Statuses.UNINITIALIZED;
    makeObservable(this, {
      status: observable,
      getProductPreviews: action,
      getProductPreviewsSucceses: action,
      getProductPreviewsError: action,
    });
  }
  /**
   * initial ProductPreview for search
   * @method
   * @return {void}
   *
  */
  getProductPreviews() {
    if (this.status !== Statuses.UNINITIALIZED) return;
    this.status = Statuses.LOADING;
    this.productService.getProductsPreview()
        .then((previews) =>
          this.getProductPreviewsSucceses(previews))
        .catch((err) => this.getProductPreviewsError());
  }

  getProductPreviewsSucceses(previews: ProductPreview[]) {
    this.productPreviews = previews;
    this.status = Statuses.READY;
  }

  getProductPreviewsError() {
    this.status = Statuses.ERROR;
  }
}

export default ProductSearchStore;
