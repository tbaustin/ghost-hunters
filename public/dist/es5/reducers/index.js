'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.profileReducer = exports.replyReducer = exports.postReducer = exports.userReducer = undefined;

var _userReducer = require('./userReducer');

var _userReducer2 = _interopRequireDefault(_userReducer);

var _postReducer = require('./postReducer');

var _postReducer2 = _interopRequireDefault(_postReducer);

var _replyReducer = require('./replyReducer');

var _replyReducer2 = _interopRequireDefault(_replyReducer);

var _profileReducer = require('./profileReducer');

var _profileReducer2 = _interopRequireDefault(_profileReducer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.userReducer = _userReducer2.default;
exports.postReducer = _postReducer2.default;
exports.replyReducer = _replyReducer2.default;
exports.profileReducer = _profileReducer2.default;