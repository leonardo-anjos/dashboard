import { takeLatest, takeEvery, call, put } from "redux-saga/effects";
import { ReduxReducersUtils } from "./ReducersUtils";

// properties's symbols
const asyncTaskSymbol = Symbol();
const sagaSymbol = Symbol();
const optionsSymbol = Symbol();

const defaultInitialState = {
  loading: false,
  error: null,
  data: null
};

/**
 * Reduces the worker of create saga, actions and reducers
 * related to loading and sending of data to async tasks.
 * 
 * SagaController's instances takes few specifications and provider:
 * - saga watcher.
 * - saga worker.
 * - redux reducer.
 * - action creator.
 * 
 * The specifications are:
 * - asyncTask: method that returns a promise.
 * - saga: identifier of saga, like 'login', 'submition', 'fetchUsers', etc.
 * - initialState: (optional) initial state of reducer related to this saga.
 * - take: 'every' or 'latest'
 * 
 */
class SagaController {

  constructor({ asyncTask, saga, ...options }) {
    // asyncTask: function that returns an promise.
    this[asyncTaskSymbol] = asyncTask;
    // saga: saga identifier.
    this[sagaSymbol] = saga;
    // options: optional aditional (maybe uneed) options.
    // possible options: initial state
    this[optionsSymbol] = options || {};
  }

  get reducer() {
    // defining reducers
    const reducers = {
      // reducer for <saga>:run action
      [this.RUN]: SagaController.reducerRun,
      // reducer for <saga>:resolve action
      [this.RESOLVE]: SagaController.reducerResolve,
      // reducer for <saga>:reject action
      [this.REJECT]: SagaController.reducerReject
    };
    const initialState = this[optionsSymbol].initialState || defaultInitialState;
    return ReduxReducersUtils.object({ initialState }, reducers);
  };

  get watcher() {
    const RUN = this.RUN;
    const worker = this.worker;
    
    // getting take function
    const takeFn = ({
      'every': takeEvery,
      'latest': takeLatest
    })[ this[optionsSymbol].take ] || takeLatest;

    // returns an saga watcher
    return function* () {
      yield takeFn(RUN, worker);
    }
  }

  get worker() {
    const asyncTask = this[asyncTaskSymbol];
    const RESOLVE = this.RESOLVE;
    const REJECT = this.REJECT;
    return function* (action) {
      // returns an saga worker
      const { payload, resolve, reject } = action;
      try {
        const result = yield call(asyncTask, payload);
        // if ok, resolve the promise
        resolve(result);
        // and yield saga resolve action
        yield put({ 
          type: RESOLVE,
          payload: result
        });
      } catch (exception) {
        // if error, resolve the promise
        reject(exception);
        // and yield saga reject action
        yield put({ 
          type: REJECT,
          payload: exception
        });
      }
    }
  }

  actionCreator = (payload) => {
    // returning a function to thunk
    return dispatch => {
      // The return of action creator will be a promise
      // This promises willl be resolved in the feature
      // when saga concludes the work.
      return new Promise((resolve, reject) => {
        dispatch({
          type: this.RUN,
          payload,
          // besides payload and type
          // this action includes resolve and reject functions
          // this functions will be trigger the promises's resolve
          resolve,
          reject
        });
      });
    };
  };

  // actions types

  get RUN() { 
    return `${this[sagaSymbol]}:run`;
  }

  get RESOLVE() { 
    return `${this[sagaSymbol]}:resolve`; 
  }

  get REJECT() { 
    return `${this[sagaSymbol]}:reject`;
  }

  // static helpers

  static reducerRun(state, action) {
    return { 
      ...state, 
      loading: true, 
      error: null 
    };
  }

  static reducerResolve(state, action) {
    return {
      ...state, 
      loading: false, 
      error: null, 
      data: action.payload 
    };
  }

  static reducerReject(state, action) {
    return {
      ...state, 
      loading: false, 
      error: action.payload
    };
  } 

}

export { SagaController };
