import React, {useState} from 'react';
import {connect} from 'react-redux';

import {showMenu, hideMenu} from '../../../actions/viewAction/menuAction';
import './ButtonMenu.style.scss';


const ButtonMenu = ({isActive, activate, deactivate}) => {
  return <div className= { isActive ? 'ButtonMenu checked' : 'ButtonMenu' }
    onClick = {() => isActive ? deactivate() : activate()}>
    <span className={'ButtonMenu__icon'}> </span></div>;
};
const mapState = ({view}) => {
  return {isActive: view.menu};
};

const mapDispatch = {
  activate: showMenu,
  deactivate: hideMenu,
};

export default connect(mapState, mapDispatch)(ButtonMenu);
