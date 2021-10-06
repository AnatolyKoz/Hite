import React, {useEffect} from 'react';
import {useParams} from 'react-router-dom';

import RecipeBlock from '../../global/RecipeBlock/RecipeBlock';
import {getRecipeById} from '../../actions/recipeAction/recipeAction';
import {RECIPES} from '../../varibalse/dataTypes';
import {connect} from 'react-redux';


const RecipeController = ({recipes, getById}) => {
  const {id} = useParams();
  useEffect(() => {
    getById(id);
  }, [getById, id]);
  return <RecipeBlock recipe={recipes.byID[id]}/>;
};

const mapState = ({domain}) => {
  return {recipes: domain[RECIPES]};
};

const mapDispatch = {
  getById: getRecipeById,
};

export default connect(mapState, mapDispatch)(RecipeController);
