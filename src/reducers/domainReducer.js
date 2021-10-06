import {SET_DOMAIN, SET_DOMAINS} from '../varibalse/actionTypes';

import {RECIPES, RECIPE_PAGES_OLD_FIRST, COMPONENTS,
  COMPONENTS_PAGES_OLD_FIRST, COMPONENTS_PRESENTS} from '../varibalse/dataTypes';

const initialState = {
  [RECIPES]: {
    byID: {},
    allIDs: [],
  },
  [RECIPE_PAGES_OLD_FIRST]: {
    byID: {},
    allIDs: [],
  },
  [COMPONENTS]: {
    byID: {},
    allIDs: [],
  },
  [COMPONENTS_PAGES_OLD_FIRST]: {
    byID: {},
    allIDs: [],
  }, COMPONENTS_PRESENTS,
  [COMPONENTS_PRESENTS]: {
    byID: {},
    allIDs: [],
  },
};


// TODO can be optimized, needs tests
const domainReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_DOMAIN: {
      const {data, id, type} = action.payload;
      return {...state,
        [type]: {
          byID: {
            ...state[type].byID,
            [id]: data,
          },
          allIDs: state[type].allIDs.concat(id),
        },
      };
    }
    case SET_DOMAINS:
      const data = action.payload;
      const type = data.type;
      const ids = [];
      let domains = {
        [type]: {
          byID: {
          },
        },
      };
      data.domains.forEach((domain) => {
        ids.push(domain.id);
        domains = {
          [type]: {
            byID: {
              ...domains[type].byID,
              [domain.id]: {...domain, status: data.status},
            },
          },
        };
      });
      return {...state,
        [type]: {
          byID: {
            ...state[type].byID,
            ...domains[type].byID,
          },
          allIDs: state[type].allIDs.concat(ids),
        },
      };
    default:
      return state;
  }
};

export default domainReducer;
