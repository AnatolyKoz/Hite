import {units} from '../../varibalse/units/units';
import {useState} from 'react';
import Select from 'react-select';

import './AddComponent.styles.scss';

const customStyles = {
  container: (provided, state) => ({
    ...provided,
    margin: '0 0',
    width: '20rem',
  }),
};

const unitsStyle = {
  container: (provided, state) => ({
    ...provided,
    margin: '0 0',
    width: '10rem',
  }),
};

const AddComponent = ({components, addComponent, createComponents}) => {
  const [statusAddComponent, setStatusAddComponent] = useState(false);
  return {
    false: <AddComponentButton setStatusAddComponent = {setStatusAddComponent}/>,
    true: <AddComponentAddForm components = {components}
      createComponents ={createComponents} addComponent ={addComponent} />,
  }[statusAddComponent];
};

const AddComponentButton = ({setStatusAddComponent}) => <button className='AddComponent__btn'
  onClick = { ()=>setStatusAddComponent(true)}> add component</button>;

const AddComponentAddForm = ({components, addComponent, createComponents}) => {
  // component = {
  //   label: String,
  //   value: int id
  // }
  const [component, setComponent] = useState(null);
  // console.log(component);
  // value = String
  const [value, setValue] = useState('');

  // unit = {
  // SiPrefix: prefix,
  // type: type
  // }
  const [unit, setUnit] = useState(null);

  return <div className='AddComponent'>
    <div className="AddComponent__form">
      <Select styles={customStyles} options={components} onChange={(value) => setComponent(value)}/>
      <input value={value}
        className="AddComponent__form-input" onChange={(data) => setValue(data.target.value)}/>
      <Select styles={unitsStyle} options = {units} onChange={(value) => setUnit(value)}/>
      <button className='AddComponent__form-btn'
        onClick={() =>{
          if (component != null && unit !== null && value !== '') {
            if (createComponents) {
              let unicum = true;
              createComponents.forEach((createComponent) => {
                if (createComponent.id === component.value) unicum = false;
              });
              if (unicum) addComponent(component.value, unit.value, value);
            } else addComponent(component.value, unit.value, value);
          }
        }}> add component</button>;
    </div>
  </div>;
};

export default AddComponent;
