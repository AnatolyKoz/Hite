import React from 'react';
import {Link} from 'react-router-dom';

import './Logo.styles.scss';


import {ReactComponent as LogoSVG} from './img/Logo.svg';


const Logo = () => {
  const Logo = '/shop';
  return <Link to= {Logo}> <div className="container">
    <LogoSVG className="logo"/>
    <h2>hite</h2>
  </div>
  </Link>;
};

export default Logo;
