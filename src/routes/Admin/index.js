import saga from './admin.sagas';
import reducer from './admin.reducer';
import asyncComponent from 'Src/enhancers/asyncComponent';

export const adminReducer = reducer;
export const adminSaga = saga;

export default asyncComponent(() => import('./admin.container'));
