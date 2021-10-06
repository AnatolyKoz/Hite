import {combineReducers} from 'redux';
import domainReducer from './domainReducer';
import createRecipeReducer from './createRecipeReducer';
import viewReducer from './viewReducer';
import search from './searchReducer';

const rootReducer = combineReducers({
  domain: domainReducer,
  createRecipe: createRecipeReducer,
  view: viewReducer,
  search: search,
});

export default rootReducer;
