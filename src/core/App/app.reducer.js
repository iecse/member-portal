import reducer from 'Src/utils/reducer';

const actionHandlers = {
  SET_LOGGED_IN: (s, a) => ({ ...s, loggedIn: a.payload }),
  FETCH_USER_DATA_SUCCESS: (s, a) => ({ ...s, userDetails: a.payload }),
  SET_LOADING: (s, a) => ({ ...s, loading: a.payload })
};

const initialState = {
  loggedIn: true,
  loading: true,
  userDetails: {
    memId: '',
    name: '',
    email: '',
    type: 1
  }
};

export default reducer(initialState, actionHandlers);
