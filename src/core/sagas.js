import { all, put, call } from 'redux-saga/effects';
import { registerSaga } from 'Src/routes/Register';
import { loginSaga } from 'Src/routes/Login';
import { homeSaga } from 'Src/routes/Home';
import { eventsSaga } from 'Src/routes/Events';
import { navbarSaga } from 'Src/modules/Navbar';
import { action, request } from 'Src/utils';

function* init() {
  if (JSON.parse(localStorage.getItem('auth')))
    yield put(action('SET_LOGGED_IN', true));
  else yield put(action('SET_LOGGED_IN', false));
  const data = yield call(request, '/init');
  if (data.success && data.data.loggedIn) {
    yield put(action('SET_LOGGED_IN', true));
    yield put(action('FETCH_USER_DATA_SUCCESS', data.data.userDetails));
  } else if (data.success && !data.data.loggedIn)
    yield put(action('SET_LOGGED_IN', false));
}

export function* rootSaga() {
  yield all([
    init(),
    registerSaga(),
    loginSaga(),
    homeSaga(),
    eventsSaga(),
    navbarSaga()
  ]);
}

export default rootSaga;
