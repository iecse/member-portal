import withAuth from 'Src/enhancers/withAuth';
import Login from './Login';
import Register from './Register';
import Events from './Events';
import Home from './Home';
import Admin from './Admin';

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
    name: 'Admin',
    pathname: '/admin',
    component: withAuth(Admin, true, 2)
  },
  {
    name: 'Home',
    pathname: '*',
    component: withAuth(Home)
  }
];
