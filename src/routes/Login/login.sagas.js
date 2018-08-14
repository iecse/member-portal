import { call, put, takeLatest } from 'redux-saga/effects';
import { delay } from 'redux-saga';
import { request, action } from 'Src/utils';

function* login({ payload }) {
  const data = yield call(request, '/login', {
    email: payload.email,
    password: payload.password
  });
  if (data.success) {
    yield put(action('SET_SNACKBAR', { type: 'success', message: data.msg }));
    localStorage.setItem('auth', true);
    yield put(action('FETCH_USER_DATA_SUCCESS', data.data));
    yield put(action('SET_LOGGED_IN', true));
    yield payload.push('/');
  } else
    yield put(action('SET_SNACKBAR', { type: 'danger', message: data.msg }));
  yield delay(3000);
  yield put(action('CLEAR_SNACKBAR'));
}

function* loginSaga() {
  yield takeLatest('FETCH_LOGIN_BEGIN', login);
}

export default loginSaga;
