import {SHOW_ADVANCEDSEARCH, HIDE_ADVANCEDSEARCH} from '../../varibalse/actionTypes';


export const showAdvancedSearch = () => {
  return {type: SHOW_ADVANCEDSEARCH};
};

export const hideAdvancedSearch = () => {
  return {type: HIDE_ADVANCEDSEARCH};
};
