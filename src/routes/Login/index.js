import saga from './login.sagas';
import asyncComponent from 'Src/enhancers/asyncComponent';

export const loginSaga = saga;

export default asyncComponent(() => import('./login.container'));
