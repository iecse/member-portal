import reducer from './newUser.reducer';
import saga from './newUser.sagas';
import asyncComponent from 'Src/enhancers/asyncComponent';

export const newUserReducer = reducer;
export const newUserSaga = saga;

export default asyncComponent(() => import('./newUser.container'));
