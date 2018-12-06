import saga from './tutorials.sagas';
import reducer from './tutorials.reducer';
import asyncComponent from 'Src/enhancers/asyncComponent';

export const tutorialsReducer = reducer;
export const tutorialsSaga = saga;

export default asyncComponent(() => import('./tutorials.container'));
