import React from 'react';

import './BasicInfo.styles.scss';


const BasicInfo = ({recipe}) => {
  if (!recipe) return null;
  return <div className="BasicInfo">
    <div className="BasicInfo__Block">
      <h4> Calorific value </h4>
      <h3> { recipe.calorificValue } </h3>
      <h4> Kcal </h4>
    </div>
    <div className="BasicInfo__Block">
      <h4> carbohydrates </h4>
      <h3> { recipe.carbohydrates } </h3>
      <h4> mg </h4>
    </div>
    <div className="BasicInfo__Block">
      <h4>  squirrels </h4>
      <h3> { recipe.squirrels } </h3>
      <h4> mg </h4>
    </div>
    <div className="BasicInfo__Block">
      <h4> fats  </h4>
      <h3> { recipe.fats } </h3>
      <h4> mg </h4>
    </div>
  </div>;
};


export default BasicInfo;
