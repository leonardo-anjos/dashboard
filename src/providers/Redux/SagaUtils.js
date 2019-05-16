import { all } from 'redux-saga/effects';
import { invoke } from '../../util';

export const ReduxSagaUtils = {

  /**
   * Compose all sagas in one sigle sagas.
   * @param {Generator} sagas Sagas to be combined.
   */
  compose: (...sagas) => {
    return function* () {
      yield all( sagas.map(invoke) );
    };
  }

};