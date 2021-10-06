
import './DifficultyButton.styles.scss';
import Select from 'react-select'
const options = [
  { label: 'крайне сложно', value: 5 },
  { label: 'сложно', value: 4 },
  { label: 'нормально', value: 3 },
  { label: 'лекго', value: 2 },
  { label: 'элементарно', value: 1 },
]



const customStyles = {
  container: (provided, state) => ({
    ...provided,
    margin: '0 0',
    width: '100%',
  }),
};


const DifficultyButton = ({setDifficulty}) => {
  return <Select styles={customStyles} options={options} isMulti={false} 
  isSearchable={false} onChange={(change) => {setDifficulty(change.value)}}></Select>
}

export default DifficultyButton;