import { takeLatest, put, spawn, call } from 'redux-saga/effects';
import { fetchList, fetchDetails } from '../api/index';
import {
  listRequest,
  listSuccess,
  listFailure,
} from '../slices/listSlice';
import {
  detailsRequest,
  detailsSuccess,
  detailsFailure,
} from '../slices/detailsSlice';


// watcher
function* watchListRequestSaga() {
  yield takeLatest(listRequest().type, handleListRequestSaga);
}

// worker
function* handleListRequestSaga() {
  try {
    const data = yield call(fetchList);
    yield put(listSuccess(data)); // dispatch
  } catch (e) {
    yield put(listFailure(e.message)); // dispatch
    
  }
}

// watcher
function* watchDetailsRequestSaga() {
  yield takeLatest(detailsRequest().type, handleDetailsRequestSaga);
}

// worker
function* handleDetailsRequestSaga(action) {
  try {
    const data = yield call(fetchDetails, action.payload);
    yield put(detailsSuccess(data)); // dispatch
  } catch (e) {
    yield put(detailsFailure(e.message)); // dispatch
  }
}

export default function* saga() {
  yield spawn(watchListRequestSaga);
  yield spawn(watchDetailsRequestSaga);
}
