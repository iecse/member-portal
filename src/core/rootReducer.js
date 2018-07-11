import { combineReducers } from 'redux';
import { loginReducer } from '../routes/Login';

export default combineReducers({
  login: loginReducer
});
