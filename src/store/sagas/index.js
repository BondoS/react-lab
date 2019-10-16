import { takeLatest, all } from 'redux-saga/effects';

import * as actionTypes from '../actions/actionTypes';

import { chartGetSaga } from './charts';

export default function* watchAuth() {
  yield all([takeLatest(actionTypes.CHART_GET_INITIATE, chartGetSaga)]);
}
