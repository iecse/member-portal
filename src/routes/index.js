import withAuth from '../enhancers/withAuth';

import Login from './Login';
import Register from './Register';
import Home from './Home';

export default [
  {
    name: 'Login',
    pathname: '/login',
    component: withAuth(Login, false)
  },
  {
    name: 'Register',
    pathname: '/register',
    component: withAuth(Register, false)
  },
  {
    name: 'Home',
    pathname: '*',
    component: withAuth(Home)
  }
];
