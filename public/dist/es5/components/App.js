'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouterConfig = require('react-router-config');

var _Header = require('./partials/Header');

var _Header2 = _interopRequireDefault(_Header);

var _apiActions = require('../actions/apiActions');

var _apiActions2 = _interopRequireDefault(_apiActions);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var App = function App(_ref) {
  var route = _ref.route;

  return _react2.default.createElement(
    'div',
    { className: 'container' },
    _react2.default.createElement(_Header2.default, null),
    (0, _reactRouterConfig.renderRoutes)(route.routes)
  );
};

exports.default = {
  component: App
};