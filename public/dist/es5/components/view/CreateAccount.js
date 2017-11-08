'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _sweetalert = require('sweetalert');

var _sweetalert2 = _interopRequireDefault(_sweetalert);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CreateAccount = function (_Component) {
  _inherits(CreateAccount, _Component);

  function CreateAccount() {
    _classCallCheck(this, CreateAccount);

    var _this = _possibleConstructorReturn(this, (CreateAccount.__proto__ || Object.getPrototypeOf(CreateAccount)).call(this));

    _this.state = {
      account: {
        username: '',
        password: ''
      }
    };
    return _this;
  }

  _createClass(CreateAccount, [{
    key: 'updateAccount',
    value: function updateAccount(attr, event) {
      event.preventDefault();
      var updated = Object.assign({}, this.state.account);
      updated[attr] = event.target.value;
      this.setState({
        account: updated
      });
    }
  }, {
    key: 'register',
    value: function register(event) {
      event.preventDefault();
      var _state$account = this.state.account,
          username = _state$account.username,
          password = _state$account.password;

      if (username.length == 0) {
        (0, _sweetalert2.default)({
          title: 'Oops...',
          text: 'You forgot your Username',
          icon: 'error'
        });
        return;
      }
      if (password.length == 0) {
        (0, _sweetalert2.default)({
          title: 'Oops...',
          text: 'You forgot your Password',
          icon: 'error'
        });
        return;
      }
      this.props.onRegister(this.state.account);
    }
  }, {
    key: 'login',
    value: function login(event) {
      event.preventDefault();
      var _state$account2 = this.state.account,
          username = _state$account2.username,
          password = _state$account2.password;

      if (username.length == 0) {
        (0, _sweetalert2.default)({
          title: 'Oops...',
          text: 'You forgot your Username',
          icon: 'error'
        });
        return;
      }
      if (password.length == 0) {
        (0, _sweetalert2.default)({
          title: 'Oops...',
          text: 'You forgot your Password',
          icon: 'error'
        });
        return;
      }
      this.props.onLogin(this.state.account);
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          'h2',
          null,
          'Register/Login'
        ),
        _react2.default.createElement(
          'div',
          { className: 'form-group' },
          _react2.default.createElement(
            'label',
            { htmlFor: 'username' },
            'Username'
          ),
          _react2.default.createElement('input', {
            onChange: this.updateAccount.bind(this, 'username'),
            className: 'form-control',
            id: 'username',
            type: 'text',
            placeholder: 'Username'
          })
        ),
        _react2.default.createElement(
          'div',
          { className: 'form-group' },
          _react2.default.createElement(
            'label',
            { htmlFor: 'password' },
            'Password'
          ),
          _react2.default.createElement('input', {
            onChange: this.updateAccount.bind(this, 'password'),
            className: 'form-control',
            id: 'password',
            type: 'password',
            placeholder: 'Password'
          })
        ),
        _react2.default.createElement(
          'div',
          { className: 'row' },
          _react2.default.createElement(
            'div',
            { className: 'col-md-4' },
            _react2.default.createElement(
              'button',
              { onClick: this.register.bind(this), className: 'btn btn-primary' },
              'Register'
            )
          ),
          _react2.default.createElement(
            'div',
            { className: 'col-md-4' },
            _react2.default.createElement(
              'button',
              { onClick: this.login.bind(this), className: 'btn btn-success' },
              'Login'
            )
          )
        )
      );
    }
  }]);

  return CreateAccount;
}(_react.Component);

exports.default = CreateAccount;