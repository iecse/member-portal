import reducer from 'Src/utils/reducer';

const actionHandlers = {
  SET_LOGGED_IN: (s, a) => ({ ...s, loggedIn: a.payload }),
  FETCH_USER_DATA_SUCCESS: (s, a) => ({ ...s, userDetails: a.payload }),
  SET_LOADING: (s, a) => ({ ...s, loading: a.payload }),
  FETCH_UNSUBSCRIBE_MAIL_SUCCESS: s => ({
    ...s,
    userDetails: { ...s.userDetails, subscribed: false }
  }),
  FETCH_SUBSCRIBE_MAIL_SUCCESS: s => ({
    ...s,
    userDetails: { ...s.userDetails, subscribed: true }
  })
};

const initialState = {
  loggedIn: true,
  loading: true,
  userDetails: {
    memId: '',
    name: '',
    email: '',
    type: 0,
    subscribed: true
  }
};

export default reducer(initialState, actionHandlers);
