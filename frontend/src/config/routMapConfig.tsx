
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import RecipeCardPage from '../pages/RecipeCardPage/RecipeCardPage';
import RecipeWorkbenchPage from '../pages/RecipeWorkbenchPage/RecipeWorkbenchPage';
import HeaderPage from '../pages/HeaderPage/HeaderPage';
import RecipesOverviewsPage from '../pages/RecipesOverviewsPage/RecipesOverviewsPage';
import LoginPage from '../pages/LoginPage/LoginPage';

// TODO поработать над роутингом
/**
 *  Its @readonly domain @class which contains сonfig of rout which help build app roating
 *  @name RouteConfig
 */
export class RouteConfig {
  readonly routLocation: string;
  readonly routName: string;

  /**
   *  @constructor
   *  @param {string} routName - its name of rout
   *  @param {string} routLocation - its location that will satisfy the march
   *  @param {any} page - its page which will be drawn on match
   */
  constructor(routName: string, routLocation: string) {
    this.routLocation = routLocation;
    this.routName = routName;
  }
}

export const routeConfigArray: RouteConfig[] = [
  new RouteConfig('Recipe', '/recipe'),
  new RouteConfig('RecipeWorkbench', '/recipeWorkbench'),
  new RouteConfig('RecipesOverviews', '/recipesOverviews'),
  new RouteConfig('Login', '/login'),
];

export const routeConfigMap: Map<string, RouteConfig> =
  new Map(routeConfigArray.map((route) => [route.routName, route] as [string, RouteConfig]));


export const RoutesConfig = () => {
  return <div>
    <BrowserRouter>
      <HeaderPage/>
      <Switch>
        <Route path = {routeConfigMap.get('Recipe').routLocation}
          component={RecipeCardPage}/>
        <Route path = {routeConfigMap.get('RecipeWorkbench').routLocation}
          component={RecipeWorkbenchPage}/>
        <Route path = {routeConfigMap.get('RecipesOverviews').routLocation}
          component={RecipesOverviewsPage}/>
        <Route path = {routeConfigMap.get('Login').routLocation}
          component={LoginPage}/>
      </Switch>
    </BrowserRouter>;
  </div>;
};

export default RoutesConfig;
