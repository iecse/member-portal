import { all, put, call } from 'redux-saga/effects';
import { newUserSaga } from 'Src/routes/NewUser';
import { registerSaga } from 'Src/routes/Register';
import { loginSaga } from 'Src/routes/Login';
import { homeSaga } from 'Src/routes/Home';
import { eventsSaga } from 'Src/routes/Events';
import { tutorialsSaga } from 'Src/routes/Tutorials';
import { tutorialSaga } from 'Src/routes/Tutorial';
import { navbarSaga } from 'Src/modules/Navbar';
import { action, request } from 'Src/utils';

function* init() {
  const data = yield call(request, '/init');
  if (data.success && data.data.loggedIn) {
    yield put(action('SET_LOGGED_IN', true));
    yield put(action('FETCH_USER_DATA_SUCCESS', data.data.userDetails));
  } else if (data.success && !data.data.loggedIn)
    yield put(action('SET_LOGGED_IN', false));
  yield put(action('SET_LOADING', false));
}

export function* rootSaga() {
  yield all([
    init(),
    newUserSaga(),
    loginSaga(),
    homeSaga(),
    eventsSaga(),
    registerSaga(),
    navbarSaga(),
    tutorialsSaga(),
    tutorialSaga()
  ]);
}

export default rootSaga;
