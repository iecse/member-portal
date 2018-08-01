import { call, put, takeLatest } from 'redux-saga/effects';
import { delay } from 'redux-saga';
import { request, action } from '../../utils';
import { history } from '../../core';

function* logout() {
  console.log('asdasd');
  const data = yield call(request, '/logout');
  console.log(data);
  if (data.success) {
    yield put(action('SET_SNACKBAR', { type: 'success', message: data.msg }));
    localStorage.setItem('auth', false);
    yield put(action('SET_LOGGED_IN', false));
    yield history.push('/login');
  } else
    yield put(action('SET_SNACKBAR', { type: 'danger', message: data.msg }));
  yield delay(3000);
  yield put(action('CLEAR_SNACKBAR'));
}

function* navbarSaga() {
  yield takeLatest('FETCH_LOGOUT_BEGIN', logout);
}

export default navbarSaga;
