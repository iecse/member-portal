import withAuth from 'Src/enhancers/withAuth';
import Login from './Login';
import NewUser from './NewUser';
import Events from './Events';
import Home from './Home';
import Register from './Register';

export default [
  {
    name: 'Login',
    pathname: '/login',
    component: withAuth(Login, false)
  },
  {
    name: 'NewUser',
    pathname: '/newuser',
    component: withAuth(NewUser, false)
  },
  {
    name: 'Events',
    pathname: '/events',
    component: withAuth(Events)
  },
  {
    name: 'Register',
    pathname: '/register',
    component: withAuth(Register, true, 2)
  },
  {
    name: 'Home',
    pathname: '*',
    component: withAuth(Home)
  }
];
