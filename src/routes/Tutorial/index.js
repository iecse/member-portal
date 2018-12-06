import saga from './tutorial.sagas';
import asyncComponent from 'Src/enhancers/asyncComponent';

export const tutorialSaga = saga;

export default asyncComponent(() => import('./tutorial.container'));
