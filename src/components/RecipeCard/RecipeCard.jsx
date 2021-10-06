import React from 'react';

import './RecipeCard.styles.scss';

import {Link} from 'react-router-dom';

const RecipeCard = ({recipe}) => {
  return <Link to= {'/recipe/' + recipe.id}>
    <div className='card'>
      <div className='card__side card__side--front'>
        <div className='card__picture card__picture-1'> &nbsp; </div>
        <div className='card__heading '>
          <span className='card__heading-span-1 card__heading-span '>The see explorer
          </span>
        </div>
        <div className='card__detailes'>
          <ul>
            <li>Сooking time {recipe.time}</li>
            <li>Portions at a time {recipe.portions}</li>
            <li>Сalorific value {recipe.calorific}</li>
            <li>dificulty: {recipe.difficulty}</li>
          </ul>
        </div>
      </div>
      <div className='card__side card__side--back card__side--back--1'>
        <div className='card_cta'>
          <div className='card__price_box'>
            <p className='card__price-only'> Only</p>
            <p className='card__price-value'> $297</p>
          </div>
        </div>
      </div>
    </div>
  </Link>;
};

export default RecipeCard;
