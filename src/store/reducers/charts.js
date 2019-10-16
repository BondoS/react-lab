import * as actionTypes from '../actions/actionTypes';
import updateObject from '../../utils/updateObj';

export const appInitialState = {
  charts: [
    {
      dataSetLabel: 'Loading...',
      chartData: [1, 2, 1, 0, 1, 0],
      peaks: [1, 2, 1, 0, 1, 0],
      color: 'rgb(192,192,192)'
    },
    {
      dataSetLabel: 'Loading...',
      chartData: [0, 2, 1, 2, 3, 10, 12, 1],
      peaks: [0, 2, 1, 2, 3, 10, 12, 1],
      color: 'rgb(192,192,192)'
    }
  ],
  error: null,
  loading: false,
  url: null
};

const chartGetSuccess = (state, action) => {
  return updateObject(state, { charts: action.charts, loading: false });
};

const chartGetFail = (state, action) => {
  return updateObject(state, { error: action.error, loading: false });
};

const reducer = (state = appInitialState, action) => {
  switch (action.type) {
    case actionTypes.CHART_GET_SUCCESS:
      return chartGetSuccess(state, action);
    case actionTypes.CHART_GET_FAIL:
      return chartGetFail(state, action);
    default:
      return state;
  }
};

export default reducer;
