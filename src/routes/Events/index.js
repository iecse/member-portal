import reducer from './events.reducer';
import saga from './events.sagas';
import asyncComponent from 'Src/enhancers/asyncComponent';

export const eventsReducer = reducer;
export const eventsSaga = saga;

export default asyncComponent(() => import('./events.container'));
