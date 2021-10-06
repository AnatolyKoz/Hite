import React from 'react';

import './SearchLine.styles.scss';
import Select from 'react-select';
import {useHistory} from 'react-router';

const customStyles = {
  option: (provided, state) => ({
    ...provided,
  }),
  input: (provided, state) => ({
    ...provided,
  }),
  container: (provided, state) => ({
    ...provided,
    borderRadius: '50%',
    margin: '0 auto',
    zIndex: '4',
  }),
};


const SearchLine = ({show, hide, status, options}) =>{
  const history = useHistory();
  const redirectToRecipe = (id) => {
    history.push('/recipe/' + id);
  };

  return <div className="search">
    <Select options={options} styles={customStyles}
      onChange={(variant) => redirectToRecipe(variant.value)}/>
    <div className="search__advancedSearch">
      <span className="search__advancedSearch-text" onClick={() => status ? hide() : show() }>
        advanced search</span>
    </div>
  </div>;
};

export default SearchLine;
