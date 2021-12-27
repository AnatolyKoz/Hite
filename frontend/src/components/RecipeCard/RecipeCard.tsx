import {Link} from 'react-router-dom';
import {routeConfigMap} from '../../config/routMapConfig';
import Recipe from '../../domain/Recipe/Recipe';

import './RecipeCard.scss';

const RecipeCard = (recipe: Recipe) => {
  return <Link to = {routeConfigMap.get('Recipe').routLocation + '?id=' + recipe.id}>
    <div className='card'>
      <div className='card__side card__side--front'>
        <div className='card__picture card__picture-1'> &nbsp; </div>
        <div className='card__heading '>
          <span className='card__heading-span-1 card__heading-span '>The see explorer</span>
        </div>

        <div className='card__detailes'>
          <ul>
            <li>{recipe.name}</li>
            <li>Сooking time {recipe.difficulty}</li>
            <li>Сalorific value {recipe.calorificValue}</li>
            <li>dificulty: {recipe.difficulty}</li>
          </ul>
        </div>
      </div>
    </div>
  </Link>;
};

export default RecipeCard;
