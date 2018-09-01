import { call, put, takeLatest } from 'redux-saga/effects';
import { delay } from 'redux-saga';
import { request, action } from 'Src/utils';

function* registerUser({ payload }) {
  const data = yield call(request, '/register', payload);
  if (data.success) {
    yield put(action('SET_SNACKBAR', { type: 'success', message: data.msg }));
    yield put(action('FETCH_REGISTER_USER_SUCCESS', data.data));
  } else
    yield put(action('SET_SNACKBAR', { type: 'danger', message: data.msg }));
  yield delay(3000);
  yield put(action('CLEAR_SNACKBAR'));
}

function* registerSaga() {
  yield takeLatest('FETCH_REGISTER_USER_BEGIN', registerUser);
}

export default registerSaga;
