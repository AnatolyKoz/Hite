import React from 'react';


import './CookingProgress.styles.scss';


const CookingProgress = ({description}) => {
  if (!description) return null;
  return <div className="CookingProgress">
    <h2 className="CookingProgress__header">Ход приготовления</h2>
    {description.map((step) =>
      <div className="CookingProgress__step" key={ step.header}>
        <span className="CookingProgress__step-header"> { step.header } </span>
        <p>  {step.paragraph}</p>
      </div>)}
  </div>;
};

export default CookingProgress;
