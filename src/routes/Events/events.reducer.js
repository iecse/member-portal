import reducer from '../../utils/reducer';

const actionHandlers = {
  FETCH_UPCOMING_EVENTS_SUCCESS: (s, a) => ({ ...s, upcoming: a.payload })
};

const initialState = {
  upcoming: []
};

export default reducer(initialState, actionHandlers);
