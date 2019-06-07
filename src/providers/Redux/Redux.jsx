import React from 'react';
import { Provider } from 'react-redux';
import { combineReducers, createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import thunk from 'redux-thunk';
import { totalAcessosReducer, totalAcessosWatcher } from '../../components/Details/TotalAcessos/Redux';

// reducers
const reducers = combineReducers({
  totalAcessos: totalAcessosReducer
});

// create the saga middleware
const sagaMiddleware = createSagaMiddleware();

// combining both reducers and sagas in a store
export const store = createStore(
  reducers,
  applyMiddleware(sagaMiddleware, thunk)
);

// run the saga
// sagaMiddleware.run(loginWatcher);
sagaMiddleware.run(totalAcessosWatcher);

// creating provider
const ProviderRedux = ({ children }) =>
  <Provider store={store}>
    { children }
  </Provider>;

// exposing provider
export { ProviderRedux };