
import {SET_PREVIWES} from '../varibalse/actionTypes';

import {COMPONENTS_PREVIEW, RECIPES_PREVIEW}
  from '../varibalse/dataTypes';
const initialState = {
  [COMPONENTS_PREVIEW]: [{
    label: null,
    value: null,
  }],
  [RECIPES_PREVIEW]: [{
    label: null,
    value: null,
  }],
};

const searchReducer = (state = initialState, action) => {
  switch (action.type) {
    case (SET_PREVIWES): {
      return {...state, [action.payload.type]: action.payload.previews.map((preview) => {
        return {
          label: preview[action.payload.label],
          value: preview[action.payload.value],
        };
      }),
      };
    }
    default:
      return state;
  }
};


export default searchReducer;
