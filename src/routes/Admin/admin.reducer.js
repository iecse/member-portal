import reducer from 'Src/utils/reducer';

const actionHandlers = {
  REGISTRATION_QR_SCANNED: (s, a) => ({ ...s, ...a.payload })
};

const initialState = {
  name: '',
  regNo: '',
  email: '',
  mobile: '',
  scanned: ''
};

export default reducer(initialState, actionHandlers);
