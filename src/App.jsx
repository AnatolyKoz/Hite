import React from 'react';
import {Provider} from 'react-redux';
import {BrowserRouter, Route} from 'react-router-dom';

import './varibalse/varibalse.scss';
import './layout.scss';
import references from './varibalse/references';

import store from './store';

import CreateRecipeController from './controllers/CreateRecipeController/CreateRecipeController';
import RecipeController from './controllers/RecipeController/RecipeController';
import MenuController from './controllers/MenuController/MenuController';
import AdvancedSearchController
  from './controllers/AdvancedSearchContoller/AdvancedSearchController';
import HeaderController from './controllers/HeaderController/HeaderController';
import RegistrationeController from './controllers/RegistrationController/RegistrationController';
import RecipeContentController from './controllers/RecipeContentController/RecipeContentController';
import ComponentsController from './controllers/ComponentController/ComponentController';

import PersonalСabinet from './controllers/PersonalСabinet/PersonalСabinet';

const App = () => {
  return <BrowserRouter>
    <Provider store = {store}>
      <HeaderController/>
      <MenuController/>
      <AdvancedSearchController/>
      <Route exact path={references.recipes.route + references.recipes.optional}>
        <RecipeContentController /> </Route>
      <Route path={references.recipe.route + references.recipe.optional}>
        <RecipeController/> </Route>
      <Route path={references.registration.route + references.registration.optional}>
        <RegistrationeController/> </Route>
      <Route path={references.create.route + references.create.optional}>
        <CreateRecipeController/> </Route>
      <Route path={references.personalСabinet.route + references.personalСabinet.optional}>
        <PersonalСabinet/> </Route>
      <Route path={references.components.route + references.components.optional}>
        <ComponentsController/> </Route>

    </Provider>
  </BrowserRouter>;
};

export default App;
