import { put, all, call, takeLatest } from 'redux-saga/effects';
import request from 'utils/request';
import API_URL from 'utils/AppConstants';
import * as constants from './constants';
import { setDrinks, setLoading } from './actions';

export function* getDrinksWorker() {
  yield put(setLoading(true));
  const requestURL = `${API_URL}/drinks`;

  try {
    const res = yield call(request, requestURL);
    if (res && res.length > 0) {
      yield put(setDrinks(res));
    }
    yield put(setLoading(false));
  } catch (err) {
    // console.log(err);
    yield put(setLoading(false));
    // yield put(repoLoadingError(err));
  }
}

export function* getDrinksWatcher() {
  yield takeLatest(constants.GET_DRINKS, getDrinksWorker);
}

export default function* rootSaga() {
  yield all([call(getDrinksWatcher)]);
}
