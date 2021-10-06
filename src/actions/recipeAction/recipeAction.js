import axios from 'axios';

import {RECIPES, RECIPE_PAGES_OLD_FIRST} from '../../varibalse/dataTypes';
import {LOADING, SUCCESSED, ERROR} from '../../varibalse/dataStatuses';

import {setDomain, setDomains} from '../domainAction';

import {getComponentsByIDs} from '../componentAction/componentAction';

export const getRecipeById = (id) => {
  return (dispatch, getState) => {
    if (getState().domain[RECIPES].allIDs.includes(id)) return;
    dispatch(getRecipeStarted(id));
    axios.get('/recipes/' + id).then((res) => {
      const componentIDs = [];
      res.data.componentList.map((component) => componentIDs.push(component.id));
      dispatch(getComponentsByIDs(componentIDs));
      dispatch(getRecipeSuccess(id, res.data));
    }).catch((err) => {
      dispatch(getRecipeFailure(id, err));
    });
  };
};


export const getRecipesOldFirst = (page) => {
  return (dispatch, getState) => {
    dispatch(getRecipesPageStarted(RECIPE_PAGES_OLD_FIRST, page));
    axios.get('/recipes/').then((res) => {
      const ids = [];
      res.data.forEach((recipe) => {
        ids.push(recipe.id);
        const componentIDs = [];
        recipe.componentList.forEach((component) => {
          componentIDs.concat(component.id);
        });
        dispatch(getComponentsByIDs(componentIDs));
      });
      dispatch(getRecipesSuccess(res.data));
      dispatch(getRecipesPageSuccess(RECIPE_PAGES_OLD_FIRST, page, ids));
    }).catch((err) => dispatch(getRecipesPageFailure(RECIPE_PAGES_OLD_FIRST, page)));
  };
};


// export const getRecipesYongeFirst = (id) => {
//   return (dispatch, getState) => {
//     if (getState().domain[RECIPES].allIDs.includes(id)) return;
//     axios.get('/recipes/').then((res) => {
//       dispatch(getRecipeSuccess(id, res.data));
//     }).catch((err) => dispatch(getRecipeFailure(id, err)));
//   };
// };


// export const getRecipesPopularFirst = (id) => {
//   return (dispatch, getState) => {
//     if (getState().domain[RECIPES].allIDs.includes(id)) return;
//     dispatch(getRecipeStarted(id));
//     setTimeout(() => dispatch(getRecipeSuccess(id, Recipe)), 10000);
//   };
// };

// export const getRecipesUnpopularFirst = (id) => {
//   return (dispatch, getState) => {
//     if (getState().domain[RECIPES].allIDs.includes(id)) return;
//     dispatch(getRecipeStarted(id));
//     setTimeout(() => dispatch(getRecipeSuccess(id, Recipe)), 10000);
//   };
// };


const getRecipeStarted = (id, data) => {
  return setDomain(RECIPES, LOADING, id, data);
};

const getRecipeFailure = (id, data) => {
  return setDomain(RECIPES, ERROR, id, {error: data});
};

const getRecipeSuccess = (id, data) => {
  return setDomain(RECIPES, SUCCESSED, id, data);
};

const getRecipesSuccess = (data) => {
  return setDomains(RECIPES, SUCCESSED, data);
};

const getRecipesPageStarted = (type, pageN) => {
  return setDomain(type, LOADING, pageN, []);
};

const getRecipesPageFailure = (type, pageN, data) => {
  return setDomain(type, ERROR, pageN, {error: data});
};

const getRecipesPageSuccess = (type, pageN, data) => {
  return setDomain(type, SUCCESSED, pageN, {recieps: data});
};
