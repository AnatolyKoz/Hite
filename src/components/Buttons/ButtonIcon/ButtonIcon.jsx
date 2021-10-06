import React from 'react';

import './ButtonIcon.styles.scss';


const ButtonIcon = (props) => {
  return <div className="buttonIcon"> {props.children} </div>;
};

export default ButtonIcon;
