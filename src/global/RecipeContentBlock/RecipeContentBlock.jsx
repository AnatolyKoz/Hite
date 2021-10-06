import React from 'react';
import ContentGrid from '../ContentGrid/2XFr/ContentGrid';
import Content from '../ContentGrid/Content';


import RecipeCard from '../../components/RecipeCard/RecipeCard';


const RecipeContentBlock = ({recipes, ids}) => {
  if (!ids) return null;
  if (ids.status !== 'SUCCESSED') return null;
  return <ContentGrid>
    {ids.recieps.map((id) =>
      <Content key={id}>
        <RecipeCard recipe={recipes.byID[id]}/>
      </Content>)}
  </ContentGrid>;
};

export default RecipeContentBlock;
