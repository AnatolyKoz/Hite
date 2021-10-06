import {SET_DOMAIN, SET_DOMAINS, SET_PREVIWES} from '../varibalse/actionTypes';

export const setDomain = (type, status, id, data) => {
  return {
    type: SET_DOMAIN,
    payload: {
      id: id,
      data: {status: status, ...data},
      type: type,
    },
  };
};

export const setDomains = (type, status, domains) => {
  return {
    type: SET_DOMAINS,
    payload: {
      status: status,
      domains: domains,
      type: type,
    },
  };
};

export const setPreviews = (type, label, value, previews) => {
  return {
    type: SET_PREVIWES,
    payload: {
      label: label,
      value: value,
      previews: previews,
      type: type,
    },
  };
};


