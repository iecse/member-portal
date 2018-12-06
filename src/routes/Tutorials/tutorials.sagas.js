import { call, put, takeLatest } from 'redux-saga/effects';
import { delay } from 'redux-saga';
import { request, action } from 'Src/utils';

function* fetchTutorials({ payload }) {
  const data = yield call(request, '/tutorials', payload);
  if (data.success) yield put(action('FETCH_TUTORIALS_SUCCESS', data.data));
  else yield put(action('SET_SNACKBAR', { type: 'danger', message: data.msg }));
  yield delay(3000);
  yield put(action('CLEAR_SNACKBAR'));
}

function* tutorialsSaga() {
  yield takeLatest('FETCH_TUTORIALS_BEGIN', fetchTutorials);
}

export default tutorialsSaga;
