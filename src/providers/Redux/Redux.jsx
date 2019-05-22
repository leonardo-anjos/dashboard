import React from 'react';
import { Provider } from 'react-redux';
import { combineReducers, createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import thunk from 'redux-thunk';
import { graficosBarraReducer, graficosBarraWatcher  } from "../../components/Grafico/Redux";
import { superintendenciasFlaReducer, superintendenciasFlaWatcher } from "../../components/Ranking/Redux";

// reducers
const reducers = combineReducers({
  graficosBarra: graficosBarraReducer,
  superintendenciasFla: superintendenciasFlaReducer
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
sagaMiddleware.run(graficosBarraWatcher);
sagaMiddleware.run(superintendenciasFlaWatcher);

// creating provider
const ProviderRedux = ({ children }) =>
  <Provider store={store}>
    { children }
  </Provider>;

// exposing provider
export { ProviderRedux };