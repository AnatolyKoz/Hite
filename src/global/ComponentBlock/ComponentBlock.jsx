import React from 'react';

import './ComponentBlock.styles.scss';

import ContentGrid from '../ContentGrid/2XFr/ContentGrid';
import Content from '../ContentGrid/Content';


import ComponentCard from '../../components/ComponentCard/ComponentCard';

const ComponentBlock = ({components, ids}) => {
  if (!ids) return null;
  if (ids.status !== 'SUCCESSED') return null;
  return <ContentGrid>
    {ids.recieps.map((id) =>
      <Content key={id}>
        <ComponentCard component={components.byID[id]}/>
      </Content>)}
  </ContentGrid>;
};

export default ComponentBlock;
