'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _constants = require('../constants');

var _constants2 = _interopRequireDefault(_constants);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var initialState = {
  all: null
};

exports.default = function () {
  var _extends3;

  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments[1];

  switch (action.type) {
    case _constants2.default.POST_CREATED:
      return _extends({}, state, _defineProperty({
        all: state.all.concat(action.data)
      }, action.data.id, action.data));

    case _constants2.default.RECORD_UPDATED:
      return _extends({}, state, (_extends3 = {}, _defineProperty(_extends3, action.data.id, action.data), _defineProperty(_extends3, 'all', state.all.map(function (item) {
        return item.id === action.data.id ? action.data : item;
      })), _extends3));

    case _constants2.default.RECORD_DELETED:
      var newState = _extends({}, state, {
        all: state.all.filter(function (item) {
          return item.id !== action.data.id;
        })
      });
      delete newState[action.data.id];

      return newState;

    case _constants2.default.FETCH_POSTS:
      var sortedData = action.data.sort(function (a, b) {
        return new Date(b.timestamp) - new Date(a.timestamp);
      });
      return _extends({}, state, { all: sortedData });

    case _constants2.default.FETCH_POST:
      return _extends({}, state, _defineProperty({}, action.data.id, action.data));

    default:
      return state;
  }
};