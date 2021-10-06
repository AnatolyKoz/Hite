import {RESET, ADDITEM, REMOVEITEM,
  SETSUITABLEITEMS, UPDATECONDITIONSSTRING, UPDATECONDITIONSCATEGORY} from './shopList.actions';

const ZCOMPANY = 'z-company';
const ACOMPANY = 'a-company';
const YCOMPANY = 'y-company';

const items = [
  {
    id: 1,
    characteristics: {
      name: 'a-phone',
      cost: 100,
      company: ACOMPANY,
      description:
    {
      wight: 100,
      heigth: 50,
      mass: 200,
    },
    },
  },
  {
    id: 2,
    characteristics: {
      name: 'z-phone',
      cost: 10,
      company: ZCOMPANY,
      description:
    {
      wight: 100,
      heigth: 50,
      mass: 200,
    },
    },
  },
  {
    id: 3,
    characteristics: {
      name: 'y-phone',
      cost: 600,
      company: YCOMPANY,
      description:
    {
      wight: 140,
      heigth: 350,
      mass: 20,
    },
    },
  },
  {
    id: 4,
    characteristics: {
      name: 'y-phone 2',
      cost: 800,
      company: YCOMPANY,
      description:
    {
      wight: 14,
      heigth: 35,
      mass: 200,
    },
    },
  },
];

const initSuitableModels = [1, 2, 3, 4];
const initialState = {
  models: items,
  selectedModels: [],
  suitableModels: initSuitableModels,
  sortStatus: {
    string: undefined,
    category: [],
  },
};


const shopListReducer = (state = initialState, action) => {
  switch (action.type) {
    case (ADDITEM):
    {
      state.selectedModels.push(action.value.id);
      return {...state};
    }
    case (RESET):
    {
      return {...state,
        suitableModels: initSuitableModels, sortStatus: {
          string: undefined, categories: undefined,
        }};
    }
    case (UPDATECONDITIONSSTRING):
    {
      return {...state, sortStatus:
         {string: action.sortStatus.string, category: state.sortStatus.category}};
    }
    case (UPDATECONDITIONSCATEGORY):
    {
      return {...state, sortStatus:
         {string: state.sortStatus.string, category: action.sortStatus.category}};
    }
    case (SETSUITABLEITEMS):
    {
      return {...state, suitableModels: suitableModelsReducer(state.models, state.sortStatus)};
    }
    case (REMOVEITEM):
    {
      state.selectedModels.push(action.value.id);
      return {...state, selectedModels: state.selectedModels
          .filter((id) => {
            return !(id === action.value.id);
          })};
    }
    default:
      return state;
  };
};


const suitableModelsReducer = (models, condition) => {
  let suitableIds = initSuitableModels;
  if (condition.string) {
    suitableIds = suitableIds.filter((id) => {
      return (models[id - 1].characteristics.name.includes(condition.string));
    });
  };
  if (condition.category) {
    suitableIds = suitableIds.filter((id) => {
      return (models[id - 1].characteristics.company === condition.category);
    });
  }
  return suitableIds;
};
export default shopListReducer;
