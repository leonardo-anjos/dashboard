import { spreadById, replaceById, removeById } from "../../util";

export const ReduxSagaReducers = {

  arrayAdd(state, action) {
    return { 
      ...state,
      data: [
        ...state.data,
        action.payload
      ]
    };
  },

  arrayUpdate(state, action) {
    return {
      ...state,
      data: spreadById(state.data, action.payload)
    };
  },

  arrayReplace(state, action) {
    return {
      ...state,
      data: replaceById(state.data, action.payload)
    };
  },

  arrayRemove(state, action) {
    return {
      ...state,
      data: removeById(state.data, action.payload)
    };
  },

  arrayClear(state, action) {
    return {
      ...state,
      data: []
    };
  },

  objectUpdate(state, action) {
    return {
      ...state,
      data: {
        ...state.data,
        ...action.payload
      }
    };
  },

  objectClear(state, action) {
    return {
      ...state,
      data: { }
    }
  },

  replace(state, action) {
    return {
      ...state,
      data: action.payload
    };
  },

  clear(state, action) {
    return {
      ...state,
      data: null
    };
  }

};