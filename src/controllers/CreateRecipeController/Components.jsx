
import {useEffect} from 'react';
import './Components.styles.scss';

import getSiPrefix from '../../varibalse/units/siPrefixes';

const Components = ({getComponentsByIDs, createComponents,
  components, removeRecipeComponent}) => {
  useEffect(() =>
    getComponentsByIDs(createComponents.map((component) => component.id )),
  [getComponentsByIDs, createComponents]);
  return <div className="">
    {createComponents.map((component) => {
      return (components.byID[component.id] !== undefined) ?
      <div className="Components__component" key={ component.id}>
        <span className="Components__component-span">
          { components.byID[component.id].name } </span>
        <span className="Components__component-span"> { component.value } </span>
        <span className="Components__component-span"> { getSiPrefix(component.SiPrefixes).text +
        component.UnitType.text } </span>
        <div className="Components__component__button"
          onClick={() => removeRecipeComponent(component.id)}>
          <span className='Components__component__button-icon'> </span></div>
      </div>: null;
    })}
  </div>;
};

export default Components;
