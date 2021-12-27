import {useContext} from 'react';
import {StoreContext} from '../context';

/**
 *  @name useRootStore
 *  @function
 *  @return {context}  context with provided root store
 *  @throws Error('useRootStore must be used within RootStoreProvider')
 */
function useRootStore() {
  const context = useContext(StoreContext);
  if (context === undefined) {
    throw new Error('useRootStore must be used within RootStoreProvider');
  }
  return context;
}

/**
 *  @name useRootStore
 *  @function
 *  @return {productStore}  productStore with provided root store
 */
export function useProductStore() {
  const {productStore} = useRootStore();
  return productStore;
}

/**
 *  @name useRecipeStore
 *  @function
 *  @return {recipeStore}  recipeStore with provided root store
 */
export function useRecipeStore() {
  const {recipeStore} = useRootStore();
  return recipeStore;
}


/**
 *  @name useRecipeWorkbenchStore
 *  @function
 *  @return {recipeWorkbenchStore}  recipeWorkbenchStore with provided root store
 */
export function useRecipeWorkbenchStore() {
  const {recipeWorkbenchStore} = useRootStore();
  return recipeWorkbenchStore;
}

/**
 *  @name useProductSearchStore
 *  @function
 *  @return {productSearchStore}  productSearchStore with provided root store
 */
export function useProductSearchStore() {
  const {productSearchStore} = useRootStore();
  return productSearchStore;
}

/**
 *  @name useRecipeSearchStore
 *  @function
 *  @return {recipeSearchStore}  recipeSearchStore with provided root store
 */
export function useRecipeSearchStore() {
  const {recipeSearchStore} = useRootStore();
  return recipeSearchStore;
}


/**
 *  @name useRecipeRecipeOverviewStore
 *  @function
 *  @return {recipeOverviewStore}  recipeOverviewStore with provided root store
 */
export function useRecipeRecipeOverviewStore() {
  const {recipeOverviewStore} = useRootStore();
  return recipeOverviewStore;
}
