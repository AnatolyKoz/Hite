import {observer} from 'mobx-react';
import {useEffect} from 'react';
import {useParams} from 'react-router';
import Recipe from '../../domain/Recipe/Recipe';
import RecipeCookingStage from '../../domain/Recipe/RecipeCookingStage';
import RecipeProduct from '../../domain/Recipe/RecipeProduct';
import useQuery from '../../hooks/useQuery';
import {useRecipeStore} from '../../hooks/useStores';
import RecipeStore from '../../stores/RecipeStore';
import Statuses from '../../utilities/Statuses';

import './RecipeCardPage.scss';

const recipeProducts = (recipeProducts: RecipeProduct[]) => {
  return <div>
    {
      recipeProducts.map((product) => <div>
        <span></span>
        <span></span>
        <span></span>
      </div>)
    }
  </div>;
};

const recipeCookingStages = (recipeCookingStages: RecipeCookingStage[]) => {
  return <div>
    {
      recipeCookingStages.map((recipeStage) =>
        <div className="RecipeCardPage__CookingProgress-step" key={recipeStage.header}>
          <span className="RecipeCardPage__CookingProgress-step-header"> {recipeStage.header} </span>
          <p>  {recipeStage.paragraph}</p>
        </div>)
    }
  </div>;
};

const RecipeCardPage = observer(() => {
  const id: number = parseInt(useQuery().get('id'));

  const recipeStore : RecipeStore = useRecipeStore();
  useEffect(() => recipeStore.getRecipe(id), [id]);

  if (recipeStore.status !== Statuses.READY) return null;

  const recipe: Recipe = recipeStore.activeRecipe;
  return <div className="RecipeCardPage">
    <div className="RecipeCardPage__BasicInfo">
      <div className="RecipeCardPage__BasicInfo-Block">
        <h4> сalorific value </h4>
        <h3> {recipe.calorificValue} </h3>
        <h4> kcal </h4>
      </div>
      <div className="RecipeCardPage__BasicInfo-Block">
        <h4> carbohydrates </h4>
        <h3> {recipe.carbohydrates} </h3>
        <h4> mg </h4>
      </div>
      <div className="RecipeCardPage__BasicInfo-Block">
        <h4> squirrels </h4>
        <h3> {recipe.squirrels} </h3>
        <h4> mg </h4>
      </div>
      <div className="RecipeCardPage__BasicInfo-Block">
        <h4> fats </h4>
        <h3> {recipe.fats} </h3>
        <h4> mg </h4>
      </div>
    </div>
    {recipeProducts(recipe.productList)}
    {recipeCookingStages(recipe.cookingStages)}
  </div>;
});

export default RecipeCardPage;
