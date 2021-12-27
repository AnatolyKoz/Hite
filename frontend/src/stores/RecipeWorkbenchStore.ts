/* eslint-disable no-invalid-this */
/* eslint-disable require-jsdoc */
/* eslint-disable valid-jsdoc */
import {action, makeObservable, observable} from 'mobx';
import CreateRecipeDTO from '../domain/dto/CreateRecipeDTO';
import Product from '../domain/Product/Product';
import WorkbenchProduct from '../domain/Product/WorkbenchProduct';
import RecipeCookingStage from '../domain/Recipe/RecipeCookingStage';
import RecipeProduct from '../domain/Recipe/RecipeProduct';
import SiPrefixes from '../domain/Unit/SiPrefixes';
import {ProductService} from '../fundamental/dataAccessServices/ProductService';
import {RecipeService} from '../fundamental/dataAccessServices/RecipeService';


/**
 *  Its  @class which contains interaction logic and state for Product
 *  @name ProductStoreRESTs
 */
export class RecipeWorkbenchStore {
  name: string = 'name';

  // add product
  productService: ProductService;
  recieService: RecipeService;
  recipeProducts: WorkbenchProduct[] = [];
  productName: string = '';
  productId: number = 0;
  productSiPrefixes: SiPrefixes;
  productNumber: number = 0;

  setRecipeName = (name: string) => {
    this.name = name;
  }

  setProductNumber = (productNumber: number) => {
    this.productNumber = productNumber;
  }

  constructor(productService: ProductService, recipeService: RecipeService) {
    this.productService = productService;
    this.recieService = recipeService;
    makeObservable(this, {
      addProductSucceses: action,
      removeProductSucceses: action,
      setProductNumber: action,
      setRecipeName: action,
      name: observable,
      fats: observable,
      productNumber: observable,
      carbohydrates: observable,
      calorificValue: observable,
      squirrels: observable,
    });
  }

   fats: number = 0;
   squirrels: number = 0;
   calorificValue: number = 0;
   carbohydrates: number = 0;


  removeProduct = (id: number) => {
    this.productService.getProductByID(id)
        .then((product: Product) => this.removeProductSucceses(id, product));
  }

  removeProductSucceses = (id: number, product: Product) => {
    this.recipeProducts.forEach((recipeProduct: WorkbenchProduct) => {
      if (recipeProduct.recipeProduct.id === id) {
        const factor: number = Math.pow(10, (recipeProduct.recipeProduct.value.SiPrefix - 2));
        this.calorificValue -= Math.ceil(product.calorificValue * factor *
      recipeProduct.recipeProduct.value.value);
        this.squirrels -= Math.ceil(product.squirrels * factor *
      recipeProduct.recipeProduct.value.value);
        this.fats -= Math.ceil(product.fats * factor *
      recipeProduct.recipeProduct.value.value);
        this.carbohydrates -= Math.ceil(product.carbohydrates * factor *
      recipeProduct.recipeProduct.value.value);
      }
    });
    this.recipeProducts = this.recipeProducts.filter((recipeProduct: WorkbenchProduct) =>
      (recipeProduct.recipeProduct.id !== id));
  }

  addProduct = (recipeProduct: WorkbenchProduct) => {
    this.productService.getProductByID(recipeProduct.recipeProduct.id)
        .then((product: Product) => this.addProductSucceses(recipeProduct, product));
  }

  addProductSucceses = (workbenchProduct: WorkbenchProduct, product: Product) => {
    if (workbenchProduct.recipeProduct.id === null || product === null ||
       isNaN(workbenchProduct.recipeProduct.value.value)) return;

    // if we have product with same id we will remove it
    this.recipeProducts.forEach((recipeProduct: WorkbenchProduct) => {
      if (workbenchProduct.recipeProduct.id === recipeProduct.recipeProduct.id) {
        this.removeProduct(workbenchProduct.recipeProduct.id);
      };
    });

    const factor: number = Math.pow(10, (workbenchProduct.recipeProduct.value.SiPrefix - 2));
    this.calorificValue += Math.ceil(product.calorificValue * factor *
      workbenchProduct.recipeProduct.value.value);
    this.squirrels += Math.ceil(product.squirrels * factor *
      workbenchProduct.recipeProduct.value.value);
    this.fats += Math.ceil(product.fats * factor *
      workbenchProduct.recipeProduct.value.value);
    this.carbohydrates += Math.ceil(product.carbohydrates * factor *
      workbenchProduct.recipeProduct.value.value);
    this.recipeProducts.push(workbenchProduct);
  }

  createRecipe = () => {
    let recipeStages: RecipeCookingStage[];
    const recipeProduct: RecipeProduct[] =
      this.recipeProducts.map((workbenchProduct: WorkbenchProduct) =>
        workbenchProduct.recipeProduct);
    const createRecipeDTO: CreateRecipeDTO =
      new CreateRecipeDTO(this.name, recipeStages, recipeProduct);
    this.recieService.postCreateRecipe(createRecipeDTO);
  }
}

