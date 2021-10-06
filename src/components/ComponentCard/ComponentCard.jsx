import React from 'react';

import {Link} from 'react-router-dom';

import './ComponentCard.styles.scss';

const ComponentCard = ({component}) => {
  return <Link to={'/component/' + component.id}>
    <div className='componentCard'>
      <div className="componentCard__header">
        {component.name}
      </div>
    </div>;
  </Link>;
};


export default ComponentCard;
