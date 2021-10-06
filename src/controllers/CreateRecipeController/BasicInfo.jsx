import React, {useEffect} from 'react';

import './BasicInfo.styles.scss';

import getSiPrefix from '../../varibalse/units/siPrefixes';

const BasicInfo = ({recalculate, createComponents, components}) => {
  let calorificValue = 0; let carbohydrates = 0; let squirrels = 0; let fats = 0;

  createComponents.forEach((componentPreview) => {
    const component = components.byID[componentPreview.id];
    if (component) {
      const degree = getSiPrefix(componentPreview.SiPrefixes).value - 2;
      calorificValue += (component.calorificValue * 10 ** degree) * componentPreview.value;
      carbohydrates += (component.carbohydrates * 10 ** degree) * componentPreview.value;
      squirrels += (component.squirrels * 10 ** degree) * componentPreview.value;
      fats += (component.fats * 10 ** degree) * componentPreview.value;
    }
  });

  useEffect(()=> recalculate(calorificValue, carbohydrates, squirrels, fats),
      [recalculate, calorificValue, carbohydrates, squirrels, fats]);

  return <div className="BasicInfo">
    <div className="BasicInfo__Block">
      <h4> Calorific value </h4>
      <h3> { (calorificValue!==null) ? calorificValue : 0} </h3>
      <h4> Kcal </h4>
    </div>
    <div className="BasicInfo__Block">
      <h4> carbohydrates </h4>
      <h3> {(carbohydrates!==null) ? carbohydrates : 0} </h3>
      <h4> mg </h4>
    </div>
    <div className="BasicInfo__Block">
      <h4>  squirrels </h4>
      <h3> {(squirrels!==null) ? squirrels : 0 } </h3>
      <h4> mg </h4>
    </div>
    <div className="BasicInfo__Block">
      <h4> fats  </h4>
      <h3> { (fats!==null) ? fats : 0 } </h3>
      <h4> mg </h4>
    </div>
  </div>;
};

export default BasicInfo;
