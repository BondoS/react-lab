import { put } from 'redux-saga/effects';
import getCharts from '../../Services/getCharts';
import { chartGetSuccess, chartGetFail } from '../actions';

export function* chartGetSaga({ url }) {
  try {
    const charts = yield getCharts(url);
    yield put(chartGetSuccess(charts));
  } catch (error) {
    yield put(chartGetFail(error));
    console.log(error);
  }
}
