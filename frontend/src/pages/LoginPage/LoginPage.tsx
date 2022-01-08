import {observer} from 'mobx-react';
import {useLoginStore} from '../../hooks/useStores';
import UserStore from '../../stores/UserStore';

import './LoginPage.scss'

const LoginPage = observer(() => {
  const loginStore: UserStore = useLoginStore();
  return <form className="LoginPage">
    <div className='LoginPage__groupe'>
      <input type='text' className='LoginPage__input' id='Email' placeholder='Email'
        required value={loginStore.userEmail}
        onChange={(data) => loginStore.setUserEmail(data.target.value)}/>
      <label htmlFor='Email' className='LoginPage__label'> Email </label>
    </div>
    <div className='LoginPage__groupe'>
      <input type='text' className='LoginPage__input' id='password'
        placeholder='Password' value={loginStore.userPassword} required
        onChange={(data) => loginStore.setUserPassword(data.target.value)}/>
      <label htmlFor='password' className='LoginPage__label'> Password </label>
    </div>
    <button className="LoginPage-btn">Login</button>
  </form>;
});

export default LoginPage;
