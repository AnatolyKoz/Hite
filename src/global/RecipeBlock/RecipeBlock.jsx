import React from 'react';

import './RecipeBlock.styles.scss';

import CookingProgress from './CookingProgress/CookingProgress';
import BasicInfo from './BasicInfo/BasicInfo';


import sofa from './sofa.jpg';
import RecipeComponents from '../../components/RecipeComponents/RecipeComponents';


const RecipeBlock = ({recipe}) => {
  if (!recipe) return null;
  return <div className="RecipeBlock">
    <img className="RecipeBlock__img" alt='' src={sofa}/>
    <BasicInfo recipe = {recipe}/>
    <RecipeComponents componentList = {recipe.componentList}/>
    <CookingProgress description = {recipe.cookingStages} />
  </div>;
};


export default RecipeBlock;
