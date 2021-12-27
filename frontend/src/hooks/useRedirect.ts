import {useHistory} from 'react-router-dom';

export const useRedirect = (redirectTo: string) => {
  const history = useHistory();
  history.push(redirectTo);
};
