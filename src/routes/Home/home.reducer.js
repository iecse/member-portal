import reducer from 'Src/utils/reducer';

const actionHandlers = {
  FETCH_HOME_DATA_SUCCESS: (s, a) => ({ ...s, ...a.payload })
};

const initialState = {
  grid: {
    areas: '',
    rows: '',
    columns: ''
  },
  content: []
};

export default reducer(initialState, actionHandlers);
