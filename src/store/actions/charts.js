import * as actionTypes from './actionTypes';

export const chartGetInitiate = url => {
  return {
    type: actionTypes.CHART_GET_INITIATE,
    loading: true,
    url
  };
};

export const chartGetSuccess = charts => {
  return {
    type: actionTypes.CHART_GET_SUCCESS,
    loading: false,
    charts
  };
};

export const chartGetFail = error => {
  return {
    type: actionTypes.CHART_GET_FAIL,
    loading: false,
    error
  };
};
