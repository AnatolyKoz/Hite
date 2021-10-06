

import React from 'react';
import {connect} from 'react-redux';

import BasicInfo from './BasicInfo';
import CookingProgress from '../../global/RecipeBlock/CookingProgress/CookingProgress';

import {recalculateRecipeBasicInfo, addRecipeProgressStep, addRecipeComponent,
  removeRecipeComponent,setDifficulty,setPortionCount, saveRecipe} 
  from '../../actions/recipeAction/createRecipe';

import './CreateRecipeController.styles.scss';

import CreateRecipeAddStep from './AddStep';
import AddPhoto from './CreateRecipeAddPhoto';
import AddComponent from './AddComponent';
import Components from './Components';
import HeaderBlock from './HeaderBlock';

import {COMPONENTS, COMPONENTS_PREVIEW} from '../../varibalse/dataTypes';
import {getComponentsByIDs} from '../../actions/componentAction/componentAction';

const CreateRecipeController = ({createComponents, description, recalculate, addStep, setDifficulty,
  addComponent, componentsPreview, removeRecipeComponent, components, getComponentsByIDs, 
  setPortionCount, submit}) => {
  return <div className="CreateRecipe">
    <HeaderBlock setDifficulty={setDifficulty} setPortionCount={setPortionCount} submit={submit}/>
    <AddPhoto/>
    <BasicInfo recalculate = {recalculate}
      createComponents={createComponents} components={components}/>
    <Components recalculate ={recalculate}
      components={components} removeRecipeComponent={removeRecipeComponent}
      createComponents = {createComponents} getComponentsByIDs={getComponentsByIDs} />
    <AddComponent createComponents = {createComponents} addComponent= {addComponent}
      components = {componentsPreview} />
    <CookingProgress description = {description} />
    <CreateRecipeAddStep addStep = {addStep} steps={description}/>
  </div>;
};

const mapState = ({createRecipe, search, domain}) => {
  return {
    
    description: createRecipe.description,
    createComponents: createRecipe.components,
    componentsPreview: search[COMPONENTS_PREVIEW],
    components: domain[COMPONENTS],
  };
};

const mapDispatch = {
  addStep: addRecipeProgressStep,
  setPortionCount: setPortionCount,
  addComponent: addRecipeComponent,
  setDifficulty: setDifficulty,
  getComponentsByIDs: getComponentsByIDs,
  removeRecipeComponent: removeRecipeComponent,
  recalculate: recalculateRecipeBasicInfo,
  submit: saveRecipe
};


export default connect(mapState, mapDispatch)(CreateRecipeController);
