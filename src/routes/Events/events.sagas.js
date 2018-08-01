import { takeLatest, call, put } from 'redux-saga/effects';
import { request, action } from '../../utils';

function* fetchUpcomingEvents() {
  const data = yield call(request, '/events/upcoming');
  if (data.success) {
    yield put(action('FETCH_UPCOMING_EVENTS_SUCCESS', data.data));
  }
}

function* eventsSaga() {
  yield takeLatest('FETCH_UPCOMING_EVENTS_BEGIN', fetchUpcomingEvents);
}

export default eventsSaga;
