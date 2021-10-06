import './AdvancedSearchController.styles.scss';

import {hideAdvancedSearch, showAdvancedSearch}
  from '../../actions/viewAction/advancedSearchAction';

import ReactModal from 'react-modal';

import {connect} from 'react-redux';

import Select from 'react-select';
import {getComponentsPreview} from '../../actions/previewsAction/previewAction';
import {useEffect} from 'react';
import {COMPONENTS_PREVIEW} from '../../varibalse/dataTypes';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    minWidth: '320px',
    width: '50vw',
    height: ' 400px',
  },
  overlay: {
    zIndex: 4,
  },
};

const AdvancedSearchController = ({isActivate, hide, get, options}) => {
  useEffect(() => get(), [get]);
  return <ReactModal style={customStyles}
    isOpen={isActivate} onRequestClose={() => hide()} contentLabel="Menu" ariaHideApp={false}>
    <Select className='AdvancedSearchController-select' isMulti
      onChange={(t) => console.log(t)}options={options}/>

  </ReactModal>;
};

// AdvancedSearchController AdvancedSearchController-activate
// <Select className='AdvancedSearchController-select' options={options}/>


const mapState = ({view, search}) => {
  return {isActivate: view.advancedSearch,
    options: search[COMPONENTS_PREVIEW],
  };
};

const mapDispatch = {
  show: showAdvancedSearch,
  hide: hideAdvancedSearch,
  get: getComponentsPreview,
};


export default connect(mapState, mapDispatch)(AdvancedSearchController);
