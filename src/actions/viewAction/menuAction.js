import {SHOW_MENU, HIDE_MENU} from '../../varibalse/actionTypes';


export const showMenu = () => {
  return {type: SHOW_MENU};
};

export const hideMenu = () => {
  return {type: HIDE_MENU};
};
