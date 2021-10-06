import React from 'react';

import references from '../../varibalse/references';


import {Link} from 'react-router-dom';
import {showMenu, hideMenu} from '../../actions/viewAction/menuAction';
import {connect} from 'react-redux';

import ReactModal from 'react-modal';
import './MenuController.styles.scss';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
  overlay: {
    zIndex : 4,
  }
};



const MenuController = ({isActivate, hide}) => {
  return <ReactModal style={customStyles}
    isOpen={isActivate} onRequestClose={() => hide()}  contentLabel="Menu" ariaHideApp={false}>
    <div className = 'MenuController'> 
    {Object.values(references).map((reference) =>
      <li key={reference.name} className='MenuController__reference' >
        <Link className='MenuController__reference-link' to={reference.route}>
          {reference.name} </Link></li>)}</div>
  </ReactModal>;
};


const mapState = ({view}) => {
  return {isActivate: view.menu};
};

const mapDispatch = {
  show: showMenu,
  hide: hideMenu,
};

export default connect(mapState, mapDispatch)(MenuController);
