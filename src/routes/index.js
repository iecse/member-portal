import withAuth from '../enhancers/withAuth';

import Login from './Login';
import Register from './Register';
import Home from './Home';
import Events from './Events';

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
    name: 'Events',
    pathname: '/events',
    component: withAuth(Events)
  },
  {
    name: 'Home',
    pathname: '*',
    component: withAuth(Home)
  }
];
