import React, {useEffect} from 'react';

import WelcomeBlock from '../../global/WelcomeBlock/WelcomeBlock';
import RecipeContentBlock from '../../global/RecipeContentBlock/RecipeContentBlock';

import {useParams} from 'react-router-dom';
import {connect} from 'react-redux';

import {getRecipeById, getRecipesOldFirst} from '../../actions/recipeAction/recipeAction';

import {RECIPES, RECIPE_PAGES_OLD_FIRST} from '../../varibalse/dataTypes';

const ContentController = ({pagesOldFirst, recipes, getById, getOldFirts}) => {
  const {page} = useParams();
  useEffect(() => getOldFirts(page), [getOldFirts, page]);
  const ids = pagesOldFirst.byID[page];
  return <>
    <WelcomeBlock/>
    <RecipeContentBlock recipes={recipes} ids={ids}/>
  </>;
};

const mapState = ({domain}) => {
  return {recipes: domain[RECIPES],
    pagesOldFirst: domain[RECIPE_PAGES_OLD_FIRST],
  };
};

const mapDispatch = {
  getById: getRecipeById,
  getOldFirts: getRecipesOldFirst,
};

export default connect(mapState, mapDispatch)(ContentController);
