import {SHOW_MENU, HIDE_MENU,
  SHOW_ADVANCEDSEARCH, HIDE_ADVANCEDSEARCH} from '../varibalse/actionTypes';


const initialState = {
  menu: false,
  advancedSearch: false,
};

const viewReducer = (state = initialState, action) => {
  switch (action.type) {
    case (SHOW_MENU): {return {...state, menu: true};}
    case (HIDE_MENU): {return {...state, menu: false};}
    case (SHOW_ADVANCEDSEARCH): {return {...state, advancedSearch: true};}
    case (HIDE_ADVANCEDSEARCH): {return {...state, advancedSearch: false};}
    default: return state;
  }
};

export default viewReducer;

