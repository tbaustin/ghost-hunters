'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRedux = require('react-redux');

var _reactRouterDom = require('react-router-dom');

var _sweetalert2AllMin = require('sweetalert2/dist/sweetalert2.all.min.js');

var _sweetalert2AllMin2 = _interopRequireDefault(_sweetalert2AllMin);

var _actions = require('../../actions');

var _actions2 = _interopRequireDefault(_actions);

var _utils = require('../../utils');

var _containers = require('../containers');

var _view = require('../view');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Post = function (_Component) {
  _inherits(Post, _Component);

  function Post() {
    _classCallCheck(this, Post);

    var _this = _possibleConstructorReturn(this, (Post.__proto__ || Object.getPrototypeOf(Post)).call(this));

    _this.state = {
      editShow: false
    };
    return _this;
  }

  _createClass(Post, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var id = this.props.match.params.id;

      if (this.props.posts[id] != null) {
        return;
      }
      this.props.getRecord(id).then(function (record) {}).catch(function (err) {
        console.log(err);
      });
    }
  }, {
    key: 'updateRecord',
    value: function updateRecord(params) {
      var id = this.props.match.params.id;

      var post = this.props.posts[id];
      var currentUser = this.props.user.currentUser;

      if (post.profile.id !== currentUser.id) {
        (0, _sweetalert2AllMin2.default)({
          title: 'Oops...',
          text: 'Must be owner of post',
          type: 'error'
        });
        return;
      }

      this.props.updateRecord(post, params).then(function (response) {
        (0, _sweetalert2AllMin2.default)({
          title: 'Success',
          text: currentUser.username + ' Your post has been updated!',
          type: 'success'
        });
      }).catch(function (err) {
        console.log(err);
      });
    }
  }, {
    key: 'deleteRecord',
    value: function deleteRecord() {
      var _this2 = this;

      var id = this.props.match.params.id;

      var post = this.props.posts[id];
      var currentUser = this.props.user.currentUser;


      if (currentUser.id !== post.profile.id) {
        (0, _sweetalert2AllMin2.default)({
          title: 'Oops...',
          text: 'Must be owner of post',
          type: 'error'
        });
        return;
      }

      this.props.deleteRecord(post).then(function () {
        _this2.props.history.push('/');

        (0, _sweetalert2AllMin2.default)({
          title: 'Post Delete',
          text: 'Please create a new post',
          type: 'success'
        });
      }).catch(function (err) {
        console.log(err);
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var _this3 = this;

      var id = this.props.match.params.id;

      var post = this.props.posts[id];
      var currentUser = this.props.user.currentUser;

      if (post == null) {
        return _react2.default.createElement('div', null);
      }

      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          'div',
          { className: 'jumbotron' },
          _react2.default.createElement(
            'h1',
            { className: 'display-3' },
            post.title
          ),
          _react2.default.createElement(
            'div',
            { className: 'row', style: { marginBottom: '25px' } },
            _react2.default.createElement('img', {
              className: 'img-fluid mx-auto',
              src: '' + post.image,
              style: { maxHeight: '400px' }
            })
          ),
          _react2.default.createElement(
            'p',
            { className: 'lead' },
            post.text
          ),
          _react2.default.createElement('hr', { className: 'my-4' }),
          post.video == undefined ? null : _react2.default.createElement(
            'div',
            { className: 'row justify-content-center' },
            _react2.default.createElement(
              'div',
              { className: 'col-8' },
              _react2.default.createElement(
                'div',
                { className: 'lead', style: { marginBottom: '25px' } },
                _react2.default.createElement(
                  'div',
                  { className: 'embed-responsive embed-responsive-16by9' },
                  _react2.default.createElement(
                    'video',
                    { style: { background: 'black' }, width: '800', controls: true, loop: true, tabIndex: '0' },
                    _react2.default.createElement('source', { src: post.video, type: post.videoType }),
                    'Your browser does not support HTML5 video.'
                  )
                )
              )
            )
          ),
          _react2.default.createElement(
            'div',
            { className: 'lead' },
            _react2.default.createElement(
              _reactRouterDom.Link,
              { to: '/profile/' + post.profile.id },
              _react2.default.createElement(
                'button',
                { className: 'btn btn-secondary btn-lg' },
                post.profile.username
              )
            ),
            _react2.default.createElement(
              'p',
              { style: { marginTop: '10px' } },
              _utils.DateUtils.relativeTime(post.timestamp)
            )
          ),
          currentUser == null ? null : currentUser.id !== post.profile.id ? null : _react2.default.createElement(
            'div',
            { className: 'row justify-content-end' },
            _react2.default.createElement(
              'div',
              { className: 'col-md-2' },
              _react2.default.createElement(
                'button',
                {
                  onClick: function onClick() {
                    _this3.setState({ editShow: !_this3.state.editShow });
                  },
                  className: 'btn btn-success'
                },
                'Edit'
              )
            ),
            _react2.default.createElement(
              'div',
              { className: 'col-md-2' },
              _react2.default.createElement(
                'button',
                { onClick: this.deleteRecord.bind(this), className: 'btn btn-danger' },
                'Delete'
              )
            )
          )
        ),
        this.state.editShow === false ? null : _react2.default.createElement(
          'div',
          null,
          _react2.default.createElement(_view.UpdateRecord, { onCreate: this.updateRecord.bind(this), currentRecord: post })
        ),
        _react2.default.createElement(
          'div',
          null,
          _react2.default.createElement(_containers.Reply, { postId: post.id })
        )
      );
    }
  }]);

  return Post;
}(_react.Component);

var stateToProps = function stateToProps(state) {
  return {
    posts: state.post,
    user: state.user
  };
};

var dispatchToProps = function dispatchToProps(dispatch) {
  return {
    getRecord: function getRecord(id) {
      return dispatch(_actions2.default.getRecord(id));
    },
    updateRecord: function updateRecord(entity, params) {
      return dispatch(_actions2.default.updateRecord(entity, params));
    },
    deleteRecord: function deleteRecord(entity) {
      return dispatch(_actions2.default.deleteRecord(entity));
    }
  };
};

exports.default = {
  component: (0, _reactRedux.connect)(stateToProps, dispatchToProps)(Post)
};