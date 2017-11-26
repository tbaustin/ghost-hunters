'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRedux = require('react-redux');

var _sweetalert = require('sweetalert');

var _sweetalert2 = _interopRequireDefault(_sweetalert);

var _reactRouterDom = require('react-router-dom');

var _view = require('../view');

var _actions = require('../../actions');

var _actions2 = _interopRequireDefault(_actions);

var _apiActions = require('../../actions/apiActions');

var _apiActions2 = _interopRequireDefault(_apiActions);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Account = function (_Component) {
  _inherits(Account, _Component);

  function Account() {
    _classCallCheck(this, Account);

    return _possibleConstructorReturn(this, (Account.__proto__ || Object.getPrototypeOf(Account)).apply(this, arguments));
  }

  _createClass(Account, [{
    key: 'register',
    value: function register(params) {
      this.props.apiRegister(params).then(function (data) {
        (0, _sweetalert2.default)({
          title: '' + data.username,
          text: 'Thank you for joining',
          icon: 'success'
        });
      }).catch(function (err) {
        alert(err);
      });
    }
  }, {
    key: 'login',
    value: function login(params) {
      this.props.apiLogin(params).then(function (data) {
        (0, _sweetalert2.default)({
          title: '' + data.username,
          text: 'Welcome Back!',
          icon: 'success'
        });
      }).catch(function (err) {
        alert(err);
      });
    }
  }, {
    key: 'logout',
    value: function logout() {
      this.props.apiLogout().then(function (data) {
        (0, _sweetalert2.default)({
          title: 'User Logged Out',
          text: 'We hope to see you again',
          icon: 'success'
        });
      }).catch(function (err) {
        alert(err);
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var currentUser = this.props.user.currentUser;
      // console.log(currentUser);

      return _react2.default.createElement(
        'div',
        null,
        currentUser == null ? _react2.default.createElement(_view.CreateAccount, { onRegister: this.register.bind(this), onLogin: this.login.bind(this) }) : _react2.default.createElement(
          'div',
          null,
          _react2.default.createElement(
            'div',
            { className: 'row' },
            _react2.default.createElement(
              'div',
              { className: 'col-md-12' },
              _react2.default.createElement(
                'h2',
                null,
                _react2.default.createElement(
                  _reactRouterDom.Link,
                  { to: '/profile/' + currentUser.id },
                  currentUser.username,
                  '  ',
                  currentUser.friendRequests && currentUser.friendRequests.length > 0 ? _react2.default.createElement(
                    'span',
                    { className: 'badge badge-primary' },
                    currentUser.friendRequests.length,
                    ' Request (s)'
                  ) : null
                )
              )
            )
          ),
          _react2.default.createElement(
            'div',
            { className: 'row' },
            _react2.default.createElement(
              'div',
              { className: 'col-md-4' },
              _react2.default.createElement(
                _reactRouterDom.Link,
                { to: '/profile/' + currentUser.id, className: 'btn btn-info btn-sm' },
                'Profile'
              )
            ),
            _react2.default.createElement(
              'div',
              { className: 'col-md-4' },
              _react2.default.createElement(
                'button',
                { onClick: this.logout.bind(this), className: 'btn btn-danger btn-sm' },
                'Logout'
              )
            )
          )
        )
      );
    }
  }]);

  return Account;
}(_react.Component);

var stateToProps = function stateToProps(state) {
  return {
    user: state.user
  };
};

var dispatchToProps = function dispatchToProps(dispatch) {
  return {
    register: function register(params) {
      return dispatch(_actions2.default.register(params));
    },
    apiRegister: function apiRegister(params) {
      return dispatch(_apiActions2.default.apiRegister(params));
    },
    loginUser: function loginUser(params) {
      return dispatch(_actions2.default.loginUser(params));
    },
    apiLogin: function apiLogin(params) {
      return dispatch(_apiActions2.default.apiLogin(params));
    },
    currentUser: function currentUser() {
      return dispatch(_actions2.default.currentUser());
    },
    apiCurrentUser: function apiCurrentUser() {
      return dispatch(_apiActions2.default.apiCurrentUser());
    },
    logoutUser: function logoutUser() {
      return dispatch(_actions2.default.logoutUser());
    },
    apiLogout: function apiLogout() {
      return dispatch(_apiActions2.default.apiLogout());
    }
  };
};

exports.default = (0, _reactRedux.connect)(stateToProps, dispatchToProps)(Account);