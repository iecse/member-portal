import { combineReducers } from 'redux';
import { loginReducer } from 'Src/routes/Login';
import { registerReducer } from 'Src/routes/Register';
import { homeReducer } from 'Src/routes/Home';
import { eventsReducer } from 'Src/routes/Events';
import { snackbarReducer } from 'Src/modules/Snackbar';

export default combineReducers({
  login: loginReducer,
  register: registerReducer,
  snackbar: snackbarReducer,
  events: eventsReducer,
  home: homeReducer
});
