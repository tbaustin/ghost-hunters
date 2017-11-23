'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRedux = require('react-redux');

var _reactHelmet = require('react-helmet');

var _reactRouterDom = require('react-router-dom');

var _actions = require('../../actions');

var _actions2 = _interopRequireDefault(_actions);

var _apiActions = require('../../actions/apiActions');

var _apiActions2 = _interopRequireDefault(_apiActions);

var _utils = require('../../utils');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var UsersList = function (_Component) {
  _inherits(UsersList, _Component);

  function UsersList(props) {
    _classCallCheck(this, UsersList);

    var _this = _possibleConstructorReturn(this, (UsersList.__proto__ || Object.getPrototypeOf(UsersList)).call(this, props));

    _this.state = {
      profile: {
        image: 'https://lh3.googleusercontent.com/EJf2u6azJe-TA6YeMWpDtMHAG6u3i1S1DhbiUXViaF5Pyg_CPEOCOEquKbX3U-drH29oYe98xKJiWqYP1ZxPGUQ545k',
        bannerImage: 'https://lh3.googleusercontent.com/RAdfZt76XmM5p_rXwVsfQ3J8ca9aQUgONQaXSE1cC0bR0xETrKAoX8OEOzID-ro_3vFfgO8ZMQIqmjTiaCvuK4GtzI8',
        firstName: 'First Name',
        lastName: 'Last Name',
        email: 'Contact Email'
      }
    };
    return _this;
  }

  // componentDidMount() {
  //   if (this.props.users.all.length > 0) {
  //     return;
  //   }
  //
  //   this.props.fetchUsers();
  // }

  // head() {
  //   return (
  //     <Helmet>
  //       <title>{`${this.props.users.all.length || ''} Users Loaded`}</title>
  //       <meta property="og:title" content="Ghosts App" />
  //     </Helmet>
  //   );
  // }

  _createClass(UsersList, [{
    key: 'render',
    value: function render() {
      var users = this.props.users.all;
      var _state$profile = this.state.profile,
          firstName = _state$profile.firstName,
          lastName = _state$profile.lastName,
          image = _state$profile.image,
          email = _state$profile.email,
          bannerImage = _state$profile.bannerImage;

      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          'div',
          { className: 'row' },
          _react2.default.createElement(
            'div',
            { className: 'col-sm-12' },
            _react2.default.createElement(
              'div',
              { className: 'card-columns' },
              users ? users.map(function (user) {
                return _react2.default.createElement(
                  'div',
                  {
                    key: user.id,
                    className: 'card text-white bg-dark mb-3',
                    style: { maxWidth: '20rem' }
                  },
                  _react2.default.createElement(
                    'div',
                    { className: 'card-header' },
                    _react2.default.createElement(
                      _reactRouterDom.Link,
                      { to: '/profile/' + user.id },
                      _react2.default.createElement('img', {
                        className: 'card-img-top',
                        src: user.image.length == 0 ? image : user.image,
                        alt: 'Card image cap'
                      })
                    )
                  ),
                  _react2.default.createElement(
                    'div',
                    { className: 'card-body text-white' },
                    _react2.default.createElement(
                      'h5',
                      { className: 'card-title', style: { color: 'white' } },
                      user.firstName || firstName,
                      ' ',
                      user.lastName || lastName
                    ),
                    _react2.default.createElement('hr', null),
                    _react2.default.createElement(
                      'p',
                      { className: 'card-text' },
                      user.email || email
                    ),
                    _react2.default.createElement(
                      'span',
                      null,
                      '~',
                      ' ',
                      _react2.default.createElement(
                        _reactRouterDom.Link,
                        { to: '/profile/' + user.id, style: { color: 'white' } },
                        _react2.default.createElement(
                          'strong',
                          null,
                          user.username || 'Anonymous'
                        )
                      )
                    )
                  ),
                  _react2.default.createElement(
                    'div',
                    { className: 'card-footer' },
                    _react2.default.createElement(
                      'small',
                      { className: 'text-muted' },
                      _utils.DateUtils.relativeTime(user.timestamp)
                    )
                  )
                );
              }) : null
            )
          )
        )
      );
    }
  }]);

  return UsersList;
}(_react.Component);

var stateToProps = function stateToProps(state) {
  return {
    users: state.user
  };
};

var dispatchToProps = function dispatchToProps(dispatch) {
  return {
    fetchUsers: function fetchUsers(params) {
      return dispatch(_actions2.default.fetchUsers(params));
    }
  };
};

var loadData = function loadData(store) {
  return store.dispatch(_apiActions2.default.apiFetchUsers());
};

exports.default = {
  loadData: loadData,
  component: (0, _reactRedux.connect)(stateToProps, dispatchToProps)(UsersList)
};