import reducer from './home.reducer';
import saga from './home.sagas';
import asyncComponent from 'Src/enhancers/asyncComponent';

export const homeReducer = reducer;
export const homeSaga = saga;

export default asyncComponent(() => import('./home.container'));
