import reducer from 'Src/utils/reducer';

const actionHandlers = {
  ADD_TUTORIAL_FILTER: (s, a) => ({
    ...s,
    activeFilters: [...s.activeFilters, a.payload]
  }),
  REMOVE_TUTORIAL_FILTER: (s, a) => ({
    ...s,
    activeFilters: [...s.activeFilters.filter(filter => filter != a.payload)]
  }),
  CLEAR_TUTORIAL_FILTERS: s => ({ ...s, ...initialState })
};

const initialState = {
  activeFilters: []
};

export default reducer(initialState, actionHandlers);
