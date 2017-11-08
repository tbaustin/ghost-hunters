import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { userReducer, postReducer, profileReducer, replyReducer } from '../reducers';

var store;
export default {
  configure: initialState => {
    // initialState can be null

    const reducers = combineReducers({
      user: userReducer,
      post: postReducer,
      profile: profileReducer,
      reply: replyReducer
    });

    if (initialState) {
      store = createStore(reducers, initialState, applyMiddleware(thunk));

      return store;
    }

    store = createStore(reducers, applyMiddleware(thunk));

    return store;
  },

  currentStore: () => {
    return store;
  }
};
