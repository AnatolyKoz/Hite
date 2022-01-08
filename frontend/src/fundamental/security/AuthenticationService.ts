import axios from 'axios';


export interface AuthenticationService {
  login(username: string, password: string)
  logout()
  getAuthHeader();
}


export class JWTAuthenticationService implements AuthenticationService {
  logout() {
    throw new Error('Method not implemented.');
  }

  login(username: string, password: string) {
    return axios.post('/login', {
      username,
      password,
    }).then((response) => localStorage.setItem('token', JSON.stringify(response.data)));
  }
  getAuthHeader = () => {
    const accessToken = localStorage.getItem('token');
    return accessToken ? {} : accessToken;
  }
}

export const AuthenticationService = new JWTAuthenticationService();
