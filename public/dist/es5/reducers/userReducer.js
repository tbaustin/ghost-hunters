'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _constants = require('../constants');

var _constants2 = _interopRequireDefault(_constants);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var initialState = {
  all: [],
  currentUser: null // signed in user
};

exports.default = function () {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments[1];

  var newState = Object.assign({}, state);

  switch (action.type) {
    case _constants2.default.CURRENT_USER_RECEIVED:
      newState['currentUser'] = action.data;
      return newState;

    case _constants2.default.USERS_RECEIVED:
      newState['all'] = action.data;
      return newState;

    case _constants2.default.USER_CREATED:
      var array = newState.all ? Object.assign([], newState.all) : [];
      array.unshift(action.data);
      newState['all'] = array;
      newState['currentUser'] = action.data;
      return newState;

    case _constants2.default.USER_LOGGED_OUT:
      newState['currentUser'] = action.data;
      return newState;

    case _constants2.default.USER_DELETED:
      return _extends({}, state, {
        currentUser: action.data,
        all: state.all.filter(function (user) {
          return user !== action.data.id;
        })
      });

    default:
      return state;
  }
};