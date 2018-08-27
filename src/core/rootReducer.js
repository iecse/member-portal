import { combineReducers } from 'redux';
import appReducer from './App/app.reducer';
import { newUserReducer } from 'Src/routes/NewUser';
import { homeReducer } from 'Src/routes/Home';
import { eventsReducer } from 'Src/routes/Events';
import { registerReducer } from 'Src/routes/Register';
import { snackbarReducer } from 'Src/modules/Snackbar';

export default combineReducers({
  common: appReducer,
  newUser: newUserReducer,
  snackbar: snackbarReducer,
  events: eventsReducer,
  home: homeReducer,
  register: registerReducer
});
