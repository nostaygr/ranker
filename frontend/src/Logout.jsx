import history from './history';

export function Logout() {
  localStorage.setItem('login', 'false');
  history.push('/');
  return null;
}
