
import './HeaderBlock.styles.scss'

import DifficultyButton from '../../components/Buttons/DifficultyButton/DifficultyButton'
import PortionCountButton from '../../components/Buttons/PortionCountButton/PortionCountButton'
import { Button } from 'semantic-ui-react'
const HeaderBlock = ({setDifficulty, setPortionCount, submit}) => {
  return <div className="FinalBlock">
      <input className="FinalBlock__input"/>
      <div className="FinalBlock__characterizationBlock">
        <div className="FinalBlock__DifficultyButton">
          <DifficultyButton setDifficulty = {setDifficulty}/>
        </div>
        <div  className="FinalBlock__PortionCountButton">
         <PortionCountButton setPortionCount ={setPortionCount}/>
        </div>
        <div className="FinalBlock__SubmitButton">
          <Button className="FinalBlock__SubmitButton-button" onClick={() => submit()}/>
        </div>
      </div>
  </div>
}


export default HeaderBlock