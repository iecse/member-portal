import { call, put, takeLatest } from 'redux-saga/effects';
import { request, action } from 'Src/utils';

function* getUserDetails() {
  const data = yield call(request, '/home');
  if (data.success) yield put(action('FETCH_HOME_DATA_SUCCESS', data.data));
}

function* homeSaga() {
  yield takeLatest('FETCH_HOME_DATA_BEGIN', getUserDetails);
}

export default homeSaga;
