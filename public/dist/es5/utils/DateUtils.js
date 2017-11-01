'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactTime = require('react-time');

var _reactTime2 = _interopRequireDefault(_reactTime);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// https://github.com/andreypopp/react-time

exports.default = {
  formattedDate: function formattedDate(date) {
    var now = new Date().getTime();
    var newDate = new Date(date).getTime();
    var diff = now - newDate;

    var seconds = diff / 1000;
    var mins = seconds / 60;
    var hours = mins / 60;

    if (hours < 24) {
      return _react2.default.createElement(_reactTime2.default, { value: date, format: 'MMM DD, YYYY', relative: true });
    }

    return _react2.default.createElement(_reactTime2.default, { value: date, format: 'MMM DD, YYYY' });
  },

  relativeTime: function relativeTime(date) {
    return _react2.default.createElement(_reactTime2.default, { value: date, titleFormat: 'YYYY/MM/DD HH:mm', relative: true });
  }
};