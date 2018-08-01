import reducer from '../../utils/reducer';

const actionHandlers = {
  FETCH_REGISTRATION_DETAILS_SUCCESS: (s, a) => ({ ...s, ...a.payload })
};

const initialState = {
  memId: '',
  name: '',
  email: ''
};

export default reducer(initialState, actionHandlers);
