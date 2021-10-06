import React from 'react';

import './WelcomeBlock.styles.scss';

import Logo from './sofa.jpg';


const WelcomePage = () => {
  return <div className="WelcomePage">
    <img src={Logo} className="WelcomePage__img" alt='soafa'/>
    <h1>hite</h1>
  </div>;
};

export default WelcomePage;
