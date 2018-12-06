import { call, put, takeLatest } from 'redux-saga/effects';
import { delay } from 'redux-saga';
import { request, action } from 'Src/utils';

function* fetchTutorial({ payload }) {
  const data = yield call(request, `/tutorial/${payload.id}`);
  if (data.success) yield put(action('FETCH_TUTORIAL_SUCCESS', data.data));
  else {
    yield put(action('SET_SNACKBAR', { type: 'danger', message: data.msg }));
    payload.history.push('/tutorials');
  }
  yield delay(3000);
  yield put(action('CLEAR_SNACKBAR'));
}

function* tutorialSaga() {
  yield takeLatest('FETCH_TUTORIAL_BEGIN', fetchTutorial);
}

export default tutorialSaga;
