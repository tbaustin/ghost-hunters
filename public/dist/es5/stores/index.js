'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _redux = require('redux');

var _reduxThunk = require('redux-thunk');

var _reduxThunk2 = _interopRequireDefault(_reduxThunk);

var _reducers = require('../reducers');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var store;
exports.default = {
  configure: function configure(initialState) {
    // initialState can be null

    var reducers = (0, _redux.combineReducers)({
      user: _reducers.userReducer,
      post: _reducers.postReducer,
      profile: _reducers.profileReducer,
      reply: _reducers.replyReducer
    });

    if (initialState) {
      store = (0, _redux.createStore)(reducers, initialState, (0, _redux.applyMiddleware)(_reduxThunk2.default));

      return store;
    }

    store = (0, _redux.createStore)(reducers, (0, _redux.applyMiddleware)(_reduxThunk2.default));

    return store;
  },

  currentStore: function currentStore() {
    return store;
  }
};