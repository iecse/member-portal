import { combineReducers } from 'redux';
import appReducer from './App/app.reducer';
import { newUserReducer } from 'Src/routes/NewUser';
import { homeReducer } from 'Src/routes/Home';
import { eventsReducer } from 'Src/routes/Events';
import { registerReducer } from 'Src/routes/Register';
import { tutorialsReducer } from 'Src/routes/Tutorials';
import { tutorialFilterReducer } from 'Src/modules/TutorialFilter';
import { snackbarReducer } from 'Src/modules/Snackbar';
import { reducer as formReducer } from 'redux-form';

export default combineReducers({
  form: formReducer,
  common: appReducer,
  newUser: newUserReducer,
  snackbar: snackbarReducer,
  events: eventsReducer,
  home: homeReducer,
  register: registerReducer,
  tutorials: tutorialsReducer,
  tutorialFilter: tutorialFilterReducer
});
