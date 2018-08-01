import { all, put } from 'redux-saga/effects';
import { registerSaga } from '../routes/Register';
import { loginSaga } from '../routes/Login';
import { eventsSaga } from '../routes/Events';
import { navbarSaga } from '../modules/Navbar';
import { action } from '../utils';

function* init() {
  if (JSON.parse(localStorage.getItem('auth')))
    yield put(action('SET_LOGGED_IN', true));
  else yield put(action('SET_LOGGED_IN', false));
}

export function* rootSaga() {
  yield all([init(), registerSaga(), loginSaga(), eventsSaga(), navbarSaga()]);
}

export default rootSaga;
