import { call, put, takeLatest } from 'redux-saga/effects';
import { delay } from 'redux-saga';
import { request, action } from 'Src/utils';

function* getRegistrationDetails({ payload }) {
  const data = yield call(request, '/register?token=' + payload.token);
  if (data.success)
    yield put(action('FETCH_REGISTRATION_DETAILS_SUCCESS', data.data));
  else yield payload.push('/login');
}

function* setPassword({ payload }) {
  const data = yield call(request, '/register', {
    password: payload.password,
    token: payload.token
  });
  if (data.success) {
    yield put(action('SET_SNACKBAR', { type: 'success', message: data.msg }));
    yield payload.push('/login');
    yield delay(3000);
    yield put(action('CLEAR_SNACKBAR'));
  }
}

function* registerSaga() {
  yield takeLatest('FETCH_REGISTRATION_DETAILS_BEGIN', getRegistrationDetails);
  yield takeLatest('FETCH_SET_PASSWORD_BEGIN', setPassword);
}

export default registerSaga;
