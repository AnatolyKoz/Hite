import React from 'react';

import './ContentGrid.styles.scss';


const ContentGrid = (props) => {
  return <div className="ContentGrid"> {props.children}</div>;
};


export default ContentGrid;

