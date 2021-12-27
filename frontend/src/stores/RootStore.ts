import {ProductService} from '../fundamental/dataAccessServices/ProductService';
import {RecipeService} from '../fundamental/dataAccessServices/RecipeService';
import {ProductSearchStore} from './ProductSearchStore';
import ProductStore from './ProductStore';
import {RecipeOverviewStore} from './RecipeOverviewsStore';
import {RecipeSearchStore} from './RecipeSearchStore';
import {RecipeStore} from './RecipeStore';
import {RecipeWorkbenchStore} from './RecipeWorkbenchStore';


// TODO мне это все не нравится
/**
 *
 *  Its  IoC @class which is responsible for providing dependencies
 *  @name RootStore
 */
export class RootStore {
  // stores
  recipeStore: RecipeStore;
  recipeWorkbenchStore: RecipeWorkbenchStore;
  recipeSearchStore: RecipeSearchStore;
  recipeOverviewStore: RecipeOverviewStore;
  productStore: ProductStore;
  productSearchStore: ProductSearchStore;

  // services
  productService: ProductService;
  recipeService: RecipeService;

  /**
   * the root store should generate and provide all dependencies itself
   * @constructor
  */
  constructor() {
    // services
    this.productService = ProductService;
    this.recipeService = RecipeService;

    // stores
    this.recipeWorkbenchStore = new RecipeWorkbenchStore(this.productService, this.recipeService);
    this.recipeStore = new RecipeStore(this.recipeService);
    this.recipeSearchStore = new RecipeSearchStore(this.recipeService);
    this.recipeOverviewStore = new RecipeOverviewStore(this.recipeService);

    this.productStore = new ProductStore(this.productService);
    this.productSearchStore = new ProductSearchStore(this.productService);
  }
}
