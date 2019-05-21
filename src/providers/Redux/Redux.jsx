import React from 'react';
import { Provider } from 'react-redux';
import { combineReducers, createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import thunk from 'redux-thunk';
// import { loginReducer, loginWatcher } from '../../components/Login/Redux';
import { getAllReducer, getAllWatcher  } from "../../components/Grafico/Redux";

// reducers
const reducers = combineReducers({
  
  // auth reducers
  // login: loginReducer
  
  alldata: getAllReducer

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
sagaMiddleware.run(getAllWatcher);

// creating provider
const ProviderRedux = ({ children }) =>
  <Provider store={store}>
    { children }
  </Provider>;

// exposing provider
export { ProviderRedux };