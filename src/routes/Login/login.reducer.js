import reducer from 'Src/utils/reducer';

const actionHandlers = {
  SET_LOGGED_IN: (s, a) => ({ ...s, loggedIn: a.payload })
};

const initialState = {
  loggedIn: false
};

export default reducer(initialState, actionHandlers);
