import React from 'react';
import {useLocation} from 'react-router-dom';

/**
 *  @name useQuery
 *  @function
 *  @return {URLSearchParams} hook for urk seacrch param
 */
const useQuery = () => {
  const {search} = useLocation();
  return React.useMemo(() => new URLSearchParams(search), [search]);
};

export default useQuery;
