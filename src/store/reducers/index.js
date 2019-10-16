import { combineReducers } from 'redux';
import chartsReducer from './charts';

const rootReducer = combineReducers({
  charts: chartsReducer
});

export default rootReducer;
