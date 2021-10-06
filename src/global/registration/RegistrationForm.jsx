import React from 'react';
import {useState} from 'react';
import './RegistrationForm.styles.scss';

const passwordVerifier = (password) => {
  const str = [];
  if (!/[0-9]/.test(password)) str.concat(['numbers']);
  if (!/[W]/.test(password)) str.concat(['capital letters']);
};


const nameVerifier = (password) => {
  const str = [];
  if (!/[W w]/.test(password)) str.concat(['capital letters']);
};

const RegistrationForm = () => {
  const [Email, setEmail] = useState('');
  const [Password, sePassword] = useState('');
  const [PasswordConferm, setPasswordConferm] = useState('');
  const [Name, setName] = useState('');

  return <form className="RegistrationForm">
    <div className='RegistrationForm__groupe'>
      <input type='text' className='RegistrationForm__input'
        id='Full' placeholder='Full name' value={Name} required
        onChange={(data) => setName(data.target.value)}/>
      <label htmlFor='Full' className='RegistrationForm__label'> Full name </label>
    </div>
    <div className='RegistrationForm__groupe'>
      <input type='text' className='RegistrationForm__input' id='Email' placeholder='Email'
        required value={Email} onChange={(data) => setEmail(data.target.value)}/>
      <label htmlFor='Email' className='RegistrationForm__label'> Email </label>
    </div>
    <div className='RegistrationForm__groupe'>
      <input type='text' className='RegistrationForm__input' id='password'
        placeholder='Password' value={Password} required
        onChange={(data) => sePassword(data.target.value)}/>
      <label htmlFor='password' className='RegistrationForm__label'> Password </label>
    </div>
    <button className="RegistrationForm-btn">register</button>
  </form>;
};

export default RegistrationForm;
