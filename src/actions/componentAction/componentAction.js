import axios from 'axios';

import {COMPONENTS, COMPONENTS_PAGES_OLD_FIRST} from '../../varibalse/dataTypes';
import {LOADING, SUCCESSED, ERROR} from '../../varibalse/dataStatuses';

import {setDomain, setDomains} from '../domainAction';


export const getComponentById = (id) => {
  return (dispatch, getState) => {
    if (getState().domain[COMPONENTS].allIDs.includes(id)) return;
    dispatch(getComponentStarted(id));
    axios.get('/components/' + id).then((res) => {
      dispatch(getComponentFailure(id, res.data));
    }).catch((err) => dispatch(getComponentSuccess(id, err)));
  };
};

export const getComponentsOldFirst = (page) => {
  return (dispatch, getState) => {
    dispatch(getComponentsPageStarted(COMPONENTS_PAGES_OLD_FIRST, page));
    axios.get('/components/').then((res) => {
      const ids = [];
      for (let i = 0; i < res.data.length; i++) {
        ids.push(res.data[i].id);
      };
      dispatch(getComponentsSuccess(res.data));
      dispatch(getComponentsPageSuccess(COMPONENTS_PAGES_OLD_FIRST, page, ids));
    }).catch((err) => dispatch(getComponentsPageFailure(COMPONENTS_PAGES_OLD_FIRST, page)));
  };
};

export const getComponentsByIDs= (IDs) => {
  return (dispatch, getState) => {
    const newIds = [];
    let requstStringIds = '';
    IDs.forEach((id) => {
      if (!getState().domain[COMPONENTS].allIDs.includes(id)) {
        newIds.concat({id: id});
        requstStringIds += ',' + id;
      }
    });
    
    if (requstStringIds === '') return;
    dispatch(getComponentsStarted(newIds));
    axios.get('/componentsByIDs/?ids=' + requstStringIds).then((res) => {
      dispatch(getComponentsSuccess(res.data));
    }).catch((err) => dispatch(getComponentsFailure(newIds)));
  };
};


// Component
const getComponentStarted = (id, data) =>
  setDomain(COMPONENTS, LOADING, id, data);


const getComponentFailure = (id, data) =>
  setDomain(COMPONENTS, ERROR, id, {error: data});


const getComponentSuccess = (id, data) =>
  setDomain(COMPONENTS, SUCCESSED, id, data);


// Components
const getComponentsStarted = (data) =>
  setDomains(COMPONENTS, LOADING, data);


const getComponentsFailure = (data) =>
  setDomain(COMPONENTS, ERROR, data);


const getComponentsSuccess = (data) =>
  setDomains(COMPONENTS, SUCCESSED, data);


const getComponentsPageStarted = (type, pageN) =>
  setDomain(type, LOADING, pageN, []);


const getComponentsPageFailure = (type, pageN, data) =>
  setDomain(type, ERROR, pageN, {error: data});


const getComponentsPageSuccess = (type, pageN, data) =>
  setDomain(type, SUCCESSED, pageN, {recieps: data});

