import { call, put, takeLatest } from 'redux-saga/effects';
import { delay } from 'redux-saga';
import { request, action } from 'Src/utils';

function* subscribeMail() {
  const data = yield call(request, '/subscribe');
  if (data.success) {
    yield put(action('FETCH_SUBSCRIBE_MAIL_SUCCESS'));
  } else
    yield put(action('SET_SNACKBAR', { type: 'danger', message: data.msg }));
  yield delay(3000);
  yield put(action('CLEAR_SNACKBAR'));
}

function* unsubscribeMail() {
  const data = yield call(request, `/unsubscribe`);
  if (data.success) {
    yield put(action('FETCH_UNSUBSCRIBE_MAIL_SUCCESS'));
  } else
    yield put(action('SET_SNACKBAR', { type: 'danger', message: data.msg }));
  yield delay(3000);
  yield put(action('CLEAR_SNACKBAR'));
}

function* mailSubscriptionSaga() {
  yield takeLatest('FETCH_SUBSCRIBE_MAIL_BEGIN', subscribeMail);
  yield takeLatest('FETCH_UNSUBSCRIBE_MAIL_BEGIN', unsubscribeMail);
}

export default mailSubscriptionSaga;
