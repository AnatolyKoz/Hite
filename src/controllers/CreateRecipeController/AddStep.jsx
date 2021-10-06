import React, {useState} from 'react';

import './AddStep.styles.scss';

let width = 10;

const AddStep = ({addStep, steps}) => {
  const [statusAddStep, setStatusAddStep] = useState(false);
  return {
    true: <AddStepAddForm addStep={addStep} steps={steps} />,
    false: <AddStepButton setStatusAddStep = {setStatusAddStep}/>,
  }[statusAddStep];
};


const AddStepButton = ({setStatusAddStep}) => <button className='AddStep__btn'
  onClick={() => setStatusAddStep(true)}> Add step</button>;


const AddStepAddForm = ({addStep, steps}) => {
  const [header, setHeader] = useState('');
  const [paragraph, setParagraph] = useState('');
  return <>
    <input type="text" value={header} style={{width: width + 'rem'}}
      onChange={ (data) => {
        width = (data.target.value.length + 5) * 1.5;
        setHeader(data.target.value);
      }}
      className="AddStep__stepInput AddStep__stepInput-header"/>
    <input type="text" onChange={(data) => setParagraph(data.target.value)}
      className="AddStep__stepInput AddStep__stepInput-paragrath"/>
    <button className='AddStep__btn' onClick={() => {
      let a = true;
      steps.forEach((step) => {
        if (step.header === header) {
          a = false; return;
        };
      })
      if (a) addStep(header, paragraph);
    }}>Conferm</button> </>;
};


export default AddStep;
