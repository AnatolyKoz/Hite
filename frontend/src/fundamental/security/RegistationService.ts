import axios from 'axios';


export interface RegistationService {
  register(username, email, password)
}


export class JWTRegistationService implements RegistationService {
  register(username: any, email: any, password: any) {
    return axios.post('/login', {
      username,
      password,
    }).then((response) => localStorage.setItem('token', JSON.stringify(response.data)));
  }
}

