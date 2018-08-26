import reducer from 'Src/utils/reducer';

const actionHandlers = {
  FETCH_HOME_DATA_SUCCESS: (s, a) => ({ ...s, ...a.payload })
};

const initialState = {
  content: []
};

export default reducer(initialState, actionHandlers);
