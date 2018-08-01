import reducer from '../../utils/reducer';

const actionHandlers = {
  SET_SNACKBAR: (s, a) => ({ ...s, ...a.payload }),
  CLEAR_SNACKBAR: s => ({ ...s, ...initialState })
};

const initialState = {
  message: null,
  type: 'success'
};

export default reducer(initialState, actionHandlers);
