
import './PortionCountButton.styles.scss';

import Select from 'react-select'

const options = [
  { label: '1', value: 1 },
  { label: '2', value: 2 },
  { label: '3', value: 3 },
  { label: '4', value: 4 },
  { label: '5', value: 5 },
  { label: '6', value: 6 },
  { label: '7', value: 7 },
  { label: '8', value: 8 },
]

const customStyles = {
  container: (provided, state) => ({
    ...provided,
    margin: '0 0',
    width: '100%',
  }),
};


const PortionCountButton = ({setPortionCount}) => {
  return <Select styles={customStyles} options={options} isMulti={false} 
  isSearchable={false} onChange={(change) => {setPortionCount(change.value)}}></Select>
}

export default PortionCountButton;