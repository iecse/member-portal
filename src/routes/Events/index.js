import Events from './events.container';
import reducer from './events.reducer';
import saga from './events.sagas';

export const eventsReducer = reducer;
export const eventsSaga = saga;

export default Events;
