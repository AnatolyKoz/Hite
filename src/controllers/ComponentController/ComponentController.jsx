import React, {useEffect} from 'react';

import ComponentBlock from '../../global/ComponentBlock/ComponentBlock';

import {useParams} from 'react-router-dom';
import {connect} from 'react-redux';

import {getComponentById, getComponentsOldFirst}
  from '../../actions/componentAction/componentAction';

import {COMPONENTS, COMPONENTS_PAGES_OLD_FIRST} from '../../varibalse/dataTypes';

const ComponentController = ({components, componentsPageOldFirst, getOldFirts, getById}) => {
  const {page} = useParams();
  useEffect(() => getOldFirts(page), [getOldFirts, page]);
  const ids = componentsPageOldFirst.byID[page];
  return <ComponentBlock components = {components} ids={ids}/>;
};


const mapState = ({domain}) => {
  return {
    components: domain[COMPONENTS],
    componentsPageOldFirst: domain[COMPONENTS_PAGES_OLD_FIRST],
  };
};

const mapDispatch = {
  getById: getComponentById,
  getOldFirts: getComponentsOldFirst,
};

export default connect(mapState, mapDispatch)(ComponentController);
