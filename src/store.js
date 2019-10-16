import { applyMiddleware, createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { compose } from 'redux';

import rootReducer from './store/reducers';
import rootSaga from './store/sagas';

const composeEnhancers =
  process.env.NODE_ENV === 'development'
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    : null || compose;

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(sagaMiddleware))
);

store.sagaTask = sagaMiddleware.run(rootSaga);

export default store;
