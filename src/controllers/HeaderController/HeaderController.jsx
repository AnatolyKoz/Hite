
import Logo from '../../global/Header/Logo/Logo';
import SearchLine from '../../global/Header/SearchLine/SearchLine';
import Navigation from '../../global/Header/Navigation/Navigation';

import './HeaderController.styles.scss';

import {useEffect} from 'react';
import {hideAdvancedSearch,
  showAdvancedSearch} from '../../actions/viewAction/advancedSearchAction';
import {connect} from 'react-redux';
import {getRecipesPreview} from '../../actions/previewsAction/previewAction';
import {RECIPES_PREVIEW} from '../../varibalse/dataTypes';
const HeaderController = ({status, show, hide, recipePreviews, getPreviews}) => {
  useEffect(() => getPreviews(), [getPreviews]);
  return <div className="HeaderController">
    <Logo></Logo>
    <SearchLine status={status} show={show} hide={hide} options={recipePreviews}></SearchLine>
    <Navigation></Navigation>
  </div>;
};


const mapState = ({view, search}) => {
  return {status: view.advancedSearch, recipePreviews: search[RECIPES_PREVIEW]};
};

const mapDispatch = {
  show: showAdvancedSearch,
  hide: hideAdvancedSearch,
  getPreviews: getRecipesPreview,
};

export default connect(mapState, mapDispatch)(HeaderController);
