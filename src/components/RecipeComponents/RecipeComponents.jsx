import React from 'react';

import './RecipeComponents.styles.scss';

import {connect} from 'react-redux';
import {COMPONENTS} from '../../varibalse/dataTypes';
import {Link} from 'react-router-dom';

import getSiPrefix from '../../varibalse/units/siPrefixes';
import getType from '../../varibalse/units/unitsType';

const RecipeComponents = ({componentList, components}) => {
  if (!componentList) return null;
  return <div className="RecipeComponents" >
    {componentList.map((ing) => (components.byID[ing.id]) ?
    <Link to={'/component/' + ing.id} key={ing.id}
      className="RecipeComponents-info">
      <span >  {components.byID[ing.id].name} </span>
      <span >  {ing.value.value} </span>
      <span >  {getSiPrefix(ing.value.siPrefix).text + getType(ing.value.type).text} </span>
    </Link> : null)
    }
  </div>;
};


// getSiPrefix(component.SiPrefixes).text +
//         component.UnitType.text
const mapState = (state) => {
  return {components: state.domain[COMPONENTS]};
};

const mapDispatch = {
};

export default connect(mapState, mapDispatch)(RecipeComponents);
