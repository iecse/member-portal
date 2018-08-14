import reducer from 'Src/utils/reducer';

const actionHandlers = {
  SET_LOGGED_IN: (s, a) => ({ ...s, loggedIn: a.payload }),
  FETCH_USER_DATA_SUCCESS: (s, a) => ({ ...s, userDetails: a.payload })
};

const initialState = {
  loggedIn: false,
  userDetails: {
    memId: '',
    name: '',
    email: '',
    type: ''
  }
};

export default reducer(initialState, actionHandlers);
