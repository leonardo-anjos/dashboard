export const ReduxReducersUtils = {
  
  /**
   * Applies sequentially all reducers.
   * when one action is triggered.
   * @param {Array} reducers a list of reducers.
   * @return {Object} new state. 
   */
  compose(...reducers) {
    return (state, action) =>
      reducers.reduce((acc, reducer) => ReduxReducersUtils.consume(acc, action, reducer), state);
  },

  /**
   * Combine two actions as one reducer.
   * @param {*} actionTypes Actions type to combine.
   * @return {Fuction} An function that receives an reducer to be consume when an action of one of type is triggered.
   */
  combine(...actionTypes) {
    return reducer =>
      (state, action) => {
        const match = actionTypes.find(type => type === action.type) !== undefined;
        return (match && ReduxReducersUtils.consume(state, action, reducer)) || state;
      };
  },

  /** 
   * Apply an reducer according to type of reducer.
   * Available types:
   * - function (as traditionally)
   * - object: works as a kay-map of reducers by type. Ex.:
   *    {
   *      "MY_ACTION": (state, action) => { ... } // ... do somthething and returns an state
   *    }
   * @param {Object} state Current state.
   * @param {Object} action Action object from redux action cretors.
   * @param {*} reducer Reducer of one of available types.
   * @return {Object} new state. 
  */
  consume(state, action, reducer) {
    if (typeof reducer === 'function') 
      return reducer(state, action);
    else if (typeof reducer === 'object') 
      return ReduxReducersUtils.consumeReducerObject(state, action, reducer);
    else 
      return state;
  },

  /**
   * Apply an reducer of type key-map.
   * @param {Object} state Current state.
   * @param {Object} action Action object from redux action cretors.
   * @param {Object} reducers Key-map of reducers.
   * @return {Object} new state. 
   */
  consumeReducerObject(state, action, reducers) {
    const r = reducers[action.type];
    return (r && r(state, action)) || state;
  },

  /**
   * Creates and key-map of reducers.
   * @param {Object} options { initialState: mixed type }
   * @param {Object} reducers Key-map object that maps reducers by types.
   * @return {Function} Reducer created from key-map.
   */
  object(options, reducers) {
    const { initialState } = options;
    return (state = initialState, action) => 
      ReduxReducersUtils.consumeReducerObject(state, action, reducers);
  }

};