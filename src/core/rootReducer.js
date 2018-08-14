import { combineReducers } from 'redux';
import appReducer from './App/app.reducer';
import { registerReducer } from 'Src/routes/Register';
import { homeReducer } from 'Src/routes/Home';
import { eventsReducer } from 'Src/routes/Events';
import { snackbarReducer } from 'Src/modules/Snackbar';

export default combineReducers({
  common: appReducer,
  register: registerReducer,
  snackbar: snackbarReducer,
  events: eventsReducer,
  home: homeReducer
});
