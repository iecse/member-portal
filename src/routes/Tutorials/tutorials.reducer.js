import reducer from 'Src/utils/reducer';

const actionHandlers = {
  FETCH_TUTORIALS_SUCCESS: (s, a) => ({ ...s, tutorials: a.payload }),
  FETCH_TUTORIAL_SUCCESS: (s, a) => ({ ...s, ...a.payload })
};

const initialState = {
  tutorials: [],
  tutorialId: '',
  name: '',
  content: '',
  author: '',
  description: '',
  domain: ''
};

export default reducer(initialState, actionHandlers);
