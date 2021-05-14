import { put, all, call, takeLatest } from 'redux-saga/effects';
import request from 'utils/request';
import API_URL from 'utils/AppConstants';
import * as constants from './constants';
import { setDrinks, setLoading, setDrinkInfo } from './actions';

export function* getDrinksWorker() {
  yield put(setLoading({ type: constants.GET_DRINKS, value: true }));
  const requestURL = `${API_URL}/drinks`;

  try {
    const res = yield call(request, requestURL);
    if (res && res.length > 0) {
      yield put(setDrinks(res));
    }
    yield put(setLoading({ type: constants.GET_DRINKS, value: false }));
  } catch (err) {
    // console.log(err);
    yield put(setLoading({ type: constants.GET_DRINKS, value: false }));
    // yield put(repoLoadingError(err));
  }
}

export function* getDrinkInfoWorker(payload) {
  yield put(setLoading({ type: constants.GET_DRINK_INFO, value: true }));
  const requestURL = `${API_URL}/drinks/${payload.id}`;

  try {
    const res = yield call(request, requestURL);
    if (res && Object.keys(res).length > 0) {
      yield put(setDrinkInfo(res));
    }
    yield put(setLoading({ type: constants.GET_DRINK_INFO, value: false }));
  } catch (err) {
    // console.log(err);
    yield put(setLoading({ type: constants.GET_DRINK_INFO, value: false }));
    // yield put(repoLoadingError(err));
  }
}

export function* getDrinksWatcher() {
  yield takeLatest(constants.GET_DRINKS, getDrinksWorker);
}

export function* getDrinkInfoWatcher() {
  yield takeLatest(constants.GET_DRINK_INFO, getDrinkInfoWorker);
}

export default function* rootSaga() {
  yield all([call(getDrinksWatcher), call(getDrinkInfoWatcher)]);
}
