import withAuth from 'Src/enhancers/withAuth';
import Login from './Login';
import NewUser from './NewUser';
import Events from './Events';
import Tutorials from './Tutorials';
import Tutorial from './Tutorial';
import Home from './Home';
// import Register from './Register';
import Account from './Account';

export default [
  {
    name: 'Login',
    pathname: '/login',
    component: withAuth(Login, false)
  },
  {
    name: 'NewUser',
    pathname: '/newuser',
    component: NewUser
  },
  {
    name: 'Events',
    pathname: '/events',
    component: withAuth(Events)
  },
  {
    name: 'Tutorials',
    pathname: '/tutorials',
    component: withAuth(Tutorials)
  },
  {
    name: 'Tutorial',
    pathname: '/tutorial',
    component: withAuth(Tutorial)
  },
  {
    name: 'Account',
    pathname: '/account',
    component: withAuth(Account)
  },
  // {
  //   name: 'Register',
  //   pathname: '/register',
  //   component: withAuth(Register, true, 20)
  // },
  {
    name: 'Home',
    pathname: '*',
    component: withAuth(Home)
  }
];
