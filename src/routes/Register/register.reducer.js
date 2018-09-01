import reducer from 'Src/utils/reducer';

const actionHandlers = {
  REGISTRATION_QR_SCANNED: (s, a) => ({ ...s, ...a.payload }),
  MEM_ID_QR_SCANNED: (s, a) => ({ ...s, ...a.payload })
};

const initialState = {
  memId: '',
  name: '',
  regNo: '',
  email: '',
  mobile: '',
  scanned: '',
  isScanningId: false
};

export default reducer(initialState, actionHandlers);
