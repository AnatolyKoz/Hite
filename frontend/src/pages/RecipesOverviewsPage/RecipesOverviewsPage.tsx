import {observer} from 'mobx-react';
import {useEffect} from 'react';
import {useHistory} from 'react-router';
import Select from 'react-select';
import {URLSearchParams} from 'url';
import recipeCard from '../../components/RecipeCard/RecipeCard';
import {sortType} from '../../config/pageCharacteristics/recipePageCharacteristics';
import {routeConfigMap} from '../../config/routMapConfig';
import PageCharacteristicsDTO from '../../domain/dto/PageCharacteristicsDTO';
import Recipe from '../../domain/Recipe/Recipe';
import useQuery from '../../hooks/useQuery';
import {useRecipeRecipeOverviewStore} from '../../hooks/useStores';
import Statuses from '../../utilities/Statuses';

import './RecipesOverviewsPage.scss';

const RecipesOverviewsPage = observer(() => {
  // redirect func
  const history = useHistory();
  const redirectToPage = (pageCharacteristics: PageCharacteristicsDTO) => {
    history.push(routeConfigMap.get('RecipesOverviews').routLocation +
    '?number=' + pageCharacteristics.number.toString() +
    '&sortBy=' + pageCharacteristicsDTO.sortBy +
    '&pageSize=' + pageCharacteristicsDTO.pageSize.toString());
  };

  const query : URLSearchParams = useQuery();
  const number : number = Number.parseInt(query.get('number'));
  const sortBy : string = query.get('sortBy');
  const pageSize : number = Number.parseInt(query.get('pageSize'));
  let pageCharacteristicsDTO = new PageCharacteristicsDTO(number, sortBy, pageSize);
  const recipeOverviewStore = useRecipeRecipeOverviewStore();
  if (!pageCharacteristicsDTO.isFilled()) {
    pageCharacteristicsDTO = new PageCharacteristicsDTO();
    redirectToPage(pageCharacteristicsDTO);
  };

  useEffect(() => recipeOverviewStore.getPage(pageCharacteristicsDTO), [pageCharacteristicsDTO]);

  if (recipeOverviewStore.status !== Statuses.READY) return null;

  const recipes: Recipe[] = recipeOverviewStore.recipes;
  const pageDTO: PageCharacteristicsDTO = recipeOverviewStore.pageCharacteristics;

  return <div className="RecipeOverviewPage">
    {/* header of recipe overview page with sort params*/}
    <div className="RecipeOverviewPage__sortMenu">
      <Select options={sortType} getOptionValue = {(option) => option.sortBy}
        onChange={(sortBy) =>
          redirectToPage(new PageCharacteristicsDTO(recipeOverviewStore.pageCharacteristics.number,
              sortBy.sortBy, recipeOverviewStore.pageCharacteristics.number))}/>
      <button className="RecipeOverviewPagee__sortMenu-button"
        onClick={() => recipeOverviewStore.getPage(
            new PageCharacteristicsDTO(pageCharacteristicsDTO.number, sortBy,
                pageCharacteristicsDTO.pageSize))}>
        {pageDTO.sortBy}</button>
      <button className="RecipeOverviewPagee__sortMenu-button">
        {pageDTO.number}</button>
    </div>
    <div className="RecipeOverviewPage__ContentSection">
      {
        recipes.map((recipe) =>
          <div className="RecipeOverviewPage__ContentSection-content">
            {recipeCard(recipe)}
          </div>,
        )
      }
    </div>
  </div>;
});

export default RecipesOverviewsPage;
