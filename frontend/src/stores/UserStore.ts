import {action, makeObservable, observable} from 'mobx';

class UserStore {
  userPassword: string;
  userEmail: string;

  constructor() {
    makeObservable(this, {
      userPassword: observable,
      userEmail: observable,
      setUserPassword: action,
      setUserEmail: action,
    });
  }

  setUserPassword = (userPassword) => {
    this.userPassword = userPassword;
  }

   setUserEmail = (userEmail) => {
     this.userEmail = userEmail;
   }
}

export default UserStore;
