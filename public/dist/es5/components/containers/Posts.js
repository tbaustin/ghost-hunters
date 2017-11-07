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

var _reactHelmet = require('react-helmet');

var _view = require('../view');

var _containers = require('../containers');

var _actions = require('../../actions');

var _actions2 = _interopRequireDefault(_actions);

var _utils = require('../../utils');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Posts = function (_Component) {
  _inherits(Posts, _Component);

  function Posts() {
    _classCallCheck(this, Posts);

    return _possibleConstructorReturn(this, (Posts.__proto__ || Object.getPrototypeOf(Posts)).apply(this, arguments));
  }

  _createClass(Posts, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      if (this.props.post.all == null) {
        this.props.fetchPosts({}).then(function (response) {
          return null;
        }).catch(function (err) {
          console.log(err);
        });
      }
      if (this.props.reply.all == null) {
        this.props.getReplies({}).then(function () {
          return null;
        }).catch(function (err) {
          console.log(err);
        });
      }
    }
  }, {
    key: 'head',
    value: function head() {
      return _react2.default.createElement(
        _reactHelmet.Helmet,
        null,
        _react2.default.createElement(
          'title',
          null,
          this.props.post.all.length + ' Posts Loaded'
        ),
        _react2.default.createElement('meta', { property: 'og:title', content: 'Ghosts App' })
      );
    }
  }, {
    key: 'createPost',
    value: function createPost(params) {
      var currentUser = this.props.user.currentUser;

      if (currentUser == null) {
        (0, _sweetalert2.default)({
          title: 'Oops...',
          text: 'Please Login or Register before posting',
          type: 'error'
        });
        return;
      }

      var updated = Object.assign({}, params, { profile: currentUser });

      this.props.createPost(updated).then(function (data) {
        (0, _sweetalert2.default)({
          title: 'Post Created',
          text: 'Title: ' + data.title,
          type: 'success'
        });
      }).catch(function (err) {
        console.log(err);
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var posts = this.props.post.all;
      var currentUser = this.props.user.currentUser;

      return _react2.default.createElement(
        'div',
        null,
        this.head(),
        _react2.default.createElement(
          'div',
          { className: 'row' },
          _react2.default.createElement(
            'div',
            { className: 'col-sm-8' },
            _react2.default.createElement(
              'div',
              { className: 'card-columns' },
              posts == null ? null : posts.map(function (post) {
                return _react2.default.createElement(
                  'div',
                  {
                    key: post.id,
                    className: 'card text-white bg-dark mb-3',
                    style: { maxWidth: '20rem' }
                  },
                  _react2.default.createElement(
                    'div',
                    { className: 'card-header' },
                    _react2.default.createElement(
                      _reactRouterDom.Link,
                      { to: '/post/' + post.id },
                      _react2.default.createElement('img', { className: 'card-img-top', src: post.image, alt: 'Card image cap' })
                    )
                  ),
                  _react2.default.createElement(
                    'div',
                    { className: 'card-body text-white' },
                    _react2.default.createElement(
                      'h4',
                      { className: 'card-title', style: { color: 'white' } },
                      post.title.length > 17 ? post.title.substr(0, 17) + '...' : post.title
                    ),
                    _react2.default.createElement(
                      'p',
                      { className: 'card-text' },
                      post.text.length > 30 ? post.text.substr(0, 30) + '...' : post.text
                    ),
                    _react2.default.createElement(
                      'span',
                      null,
                      '~',
                      ' ',
                      _react2.default.createElement(
                        _reactRouterDom.Link,
                        { to: '/profile/' + post.profile.id, style: { color: 'white' } },
                        _react2.default.createElement(
                          'strong',
                          null,
                          post.profile.username || 'Anonymous'
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
                      _utils.DateUtils.relativeTime(post.timestamp)
                    )
                  )
                );
              })
            )
          ),
          _react2.default.createElement(
            'div',
            { className: 'col-sm-4' },
            _react2.default.createElement(
              'div',
              { className: 'row' },
              _react2.default.createElement(
                'div',
                { className: 'col-sm-12' },
                _react2.default.createElement(_containers.Account, null)
              )
            ),
            currentUser == null ? null : _react2.default.createElement(
              'div',
              { className: 'row', style: { marginTop: '25px' } },
              _react2.default.createElement(
                'div',
                { className: 'row' },
                _react2.default.createElement(
                  'div',
                  { className: 'col-sm-12' },
                  _react2.default.createElement(
                    'h3',
                    null,
                    'Create a Post'
                  )
                )
              ),
              _react2.default.createElement(
                'div',
                { className: 'row' },
                _react2.default.createElement(
                  'div',
                  { className: 'col-sm-12' },
                  _react2.default.createElement(_view.CreatePost, { onCreate: this.createPost.bind(this) })
                )
              )
            )
          )
        )
      );
    }
  }]);

  return Posts;
}(_react.Component);

var stateToProps = function stateToProps(state) {
  return {
    post: state.post,
    user: state.user,
    reply: state.reply
  };
};

var dispatchToProps = function dispatchToProps(dispatch) {
  return {
    createPost: function createPost(params) {
      return dispatch(_actions2.default.createPost(params));
    },
    fetchPosts: function fetchPosts(params) {
      return dispatch(_actions2.default.fetchPosts(params));
    },
    getReplies: function getReplies(params) {
      return dispatch(_actions2.default.getReplies(params));
    }
  };
};

var loadData = function loadData(store) {
  return store.dispatch(_actions2.default.fetchPosts());
};

exports.default = {
  loadData: loadData,
  component: (0, _reactRedux.connect)(stateToProps, dispatchToProps)(Posts)
};