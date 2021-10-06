
import {ADD_RECIPE__PROGRESS_STEP, SET_BASIC_INFO, ADD_RECIPE__COMPONENT,
  REMOVE_RECIPE__COMPONENT, SET_PORTION_COUNT, SET_RECIPE_DIFFICULTY} 
  from '../../varibalse/actionTypes';

import axios from 'axios';

export const addRecipeComponent = (id, unit, value) => {
  return {type: ADD_RECIPE__COMPONENT,
    payload: {
      component: {
        id: id,
        value: value,
        SiPrefixes: unit.SiPrefixes,
        UnitType: unit.UnitType,
      },
    },
  };
};

export const saveRecipe = () => {
  return (dispatch, getState) => {
    axios.post('/create/recipe', null).then((res) => {
      console.log(res); 
    }).catch((err) => console.log(err));
  };
}



export const addRecipeProgressStep = (header, paragraph) => {
  return {type: ADD_RECIPE__PROGRESS_STEP,
    payload: {
      description: {
        header: header,
        paragraph: paragraph,
      },
    },
  };
};

export const removeRecipeComponent = (id) => {
  return {type: REMOVE_RECIPE__COMPONENT,
    payload: {
      id: id,
    },
  };
};

export const recalculateRecipeBasicInfo = (calorificValue, carbohydrates, squirrels, fats) => {
  return {type: SET_BASIC_INFO,
    payload: {
      calorificValue: calorificValue,
      carbohydrates: carbohydrates,
      squirrels: squirrels,
      fats: fats,
    },
  };
};

export const  setDifficulty = (difficulty) => {
  return {type: SET_RECIPE_DIFFICULTY,
    payload: {
      difficulty: difficulty,
    },
  };
};


export const  setPortionCount = (difficulty) => {
  return {type: SET_PORTION_COUNT,
    payload: {
      difficulty: difficulty,
    },
  };
};
