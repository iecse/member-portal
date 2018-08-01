import { combineReducers } from 'redux';
import { loginReducer } from '../routes/Login';
import { registerReducer } from '../routes/Register';
import { eventsReducer } from '../routes/Events';
import { snackbarReducer } from '../modules/Snackbar';

export default combineReducers({
  login: loginReducer,
  register: registerReducer,
  snackbar: snackbarReducer,
  events: eventsReducer
});
