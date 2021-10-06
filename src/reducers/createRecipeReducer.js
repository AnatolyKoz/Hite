import {ADD_RECIPE__COMPONENT, SET_BASIC_INFO, SET_RECIPE_DIFFICULTY,
  ADD_RECIPE__PROGRESS_STEP, REMOVE_RECIPE__COMPONENT, SET_PORTION_COUNT} 
  from '../varibalse/actionTypes';


const initialState = {
  components: [],
  description: [],
  basicinfo: [],
  portionCount: 0,
  difficulty: 0,
  calorificValue: null,
  carbohydrates: null,
  squirrels: null,
  fats: null,
};

const createRecipeReducer = (state = initialState, action) => {
  switch (action.type) {
    case (ADD_RECIPE__COMPONENT): {
      return {...state,
        components: state.components.concat(action.payload.component),
      };
    }
    case (REMOVE_RECIPE__COMPONENT): {
      return {...state,
        components: state.components.filter((component) => (action.payload.id !== component.id)),
      };
    }
    case (ADD_RECIPE__PROGRESS_STEP): {
      return {...state,
        description: state.description.concat(action.payload.description),
      };
    }
    case (SET_BASIC_INFO): {
      return {...state, calorificValue: action.payload.calorificValue,
        carbohydrates: action.payload.carbohydrates,
        squirrels: action.payload.squirrels, fats: action.payload.fats};
    }
    case (SET_RECIPE_DIFFICULTY): {
      return {...state, difficulty: action.payload.difficulty};
    }
    case (SET_PORTION_COUNT): {
      return {...state, portionCount: action.payload.portionCount};
    }
    default:
      return state;
  }
};

export default createRecipeReducer;

