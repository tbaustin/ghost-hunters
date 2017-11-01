"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _constants = require("../constants");

var _constants2 = _interopRequireDefault(_constants);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var initialState = {};

exports.default = function () {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments[1];

  var newState = _extends({}, state);
  switch (action.type) {
    case _constants2.default.GET_PROFILE:
      return _extends({}, state, _defineProperty({}, action.data.id, action.data));

    case _constants2.default.UPDATE_PROFILE:
      return _extends({}, state, _defineProperty({}, action.data.id, action.data));

    case _constants2.default.USER_DELETED:
      delete newState[action.data.id];
      return newState;

    default:
      return state;
  }
};