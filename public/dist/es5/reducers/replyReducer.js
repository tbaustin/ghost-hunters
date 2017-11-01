'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _constants = require('../constants');

var _constants2 = _interopRequireDefault(_constants);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var initialState = {
  all: null
};

exports.default = function () {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments[1];

  var newState = Object.assign({}, state);
  var keys = Object.keys(newState);

  switch (action.type) {
    case _constants2.default.REPLY_CREATED:
      newState[action.data.postId].unshift(action.data);
      newState.all.unshift(action.data);
      return newState;

    case _constants2.default.GET_REPLIES:
      if (action.params.postId) {
        newState[action.params.postId] = action.data;
        return newState;
      }

      newState.all = action.data;
      return newState;

    case _constants2.default.USER_DELETED:
      keys.map(function (key) {
        newState[key] = newState[key].filter(function (reply) {
          return reply.user.id !== action.data.id;
        });
      });

      return newState;

    case _constants2.default.RECORD_DELETED:
      delete newState[action.data.id];

      return newState;

    case _constants2.default.REPLY_DELETED:
      keys.map(function (key) {
        newState[key] = newState[key].filter(function (reply) {
          return reply.id !== action.data.id;
        });
      });

      return newState;

    case _constants2.default.REPLY_UPDATED:
      keys.map(function (key) {
        newState[key] = newState[key].map(function (reply) {
          return reply.id === action.data.id ? action.data : reply;
        });
      });

      return newState;

    default:
      return state;
  }
};