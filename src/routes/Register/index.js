import reducer from './register.reducer';
import saga from './register.sagas';
import asyncComponent from 'Src/enhancers/asyncComponent';

export const registerReducer = reducer;
export const registerSaga = saga;

export default asyncComponent(() => import('./register.container'));
