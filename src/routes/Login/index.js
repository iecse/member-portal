import reducer from './login.reducer';
import saga from './login.sagas';
import asyncComponent from 'Src/enhancers/asyncComponent';

export const loginReducer = reducer;
export const loginSaga = saga;

export default asyncComponent(() => import('./login.container'));
