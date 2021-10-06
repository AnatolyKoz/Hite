import axios from 'axios';
import {setPreviews} from '../domainAction';

import {RECIPES_PREVIEW, COMPONENTS_PREVIEW, COMPONENTS_PRESENTS, id,
  name, componentID} from '../../varibalse/dataTypes';
import {setDomains} from '../domainAction';
import {SUCCESSED} from '../../varibalse/dataStatuses';
export const getComponentsPreview = () => {
  return (dispatch, getState) => {
    axios.get('/components/ComponentPresence')
        .then((res) => {
          dispatch(setComponentsPreview(res.data));
          dispatch(setComponentsPresence(res.data));
        })
        .catch((err) => console.log(err));
  };
};

export const getRecipesPreview = () => {
  return (dispatch, getState) => {
    axios.get('/recipes/recipesPreviewDTO')
        .then((res) => dispatch(setRecipesPreview(res.data)))
        .catch((err) => console.log(err));
  };
};

const setComponentsPreview = (previews) => {
  return setPreviews(COMPONENTS_PREVIEW, name, componentID, previews);
};


const setComponentsPresence = (presents) => {
  return setDomains(COMPONENTS_PRESENTS, SUCCESSED, presents);
};


const setRecipesPreview = (previews) => {
  return setPreviews(RECIPES_PREVIEW, name, id, previews);
};
