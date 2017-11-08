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

var _utils = require('../../utils');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Reply = function (_Component) {
  _inherits(Reply, _Component);

  function Reply() {
    _classCallCheck(this, Reply);

    var _this = _possibleConstructorReturn(this, (Reply.__proto__ || Object.getPrototypeOf(Reply)).call(this));

    _this.state = {
      editShow: false
    };
    return _this;
  }

  _createClass(Reply, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      if (this.props.reply[this.props.postId] != null) {
        return;
      }
      this.props.getReplies({ postId: this.props.postId }).then(function () {}).catch(function (err) {
        console.log(err);
      });
    }
  }, {
    key: 'createReply',
    value: function createReply(params) {
      var currentUser = this.props.user.currentUser;

      if (currentUser == null) {
        (0, _sweetalert2.default)({
          title: 'Oops...',
          text: 'Please Login or Register',
          icon: 'error'
        });
        return;
      }

      params['user'] = {
        username: currentUser.username,
        id: currentUser.id
      };
      params['postId'] = this.props.postId;

      this.props.createReply(params).then(function () {}).catch(function (err) {
        console.log(err);
      });
    }
  }, {
    key: 'updateReply',
    value: function updateReply(reply, params) {
      var _this2 = this;

      var currentUser = this.props.user.currentUser;

      if (currentUser == null) {
        (0, _sweetalert2.default)({
          title: 'Oops...',
          text: 'Please Login or Register',
          icon: 'error'
        });
        return;
      }

      this.props.updateReply(reply, params).then(function () {
        _this2.setState({
          editShow: false
        });
      }).catch(function (err) {
        console.log(err);
      });
    }
  }, {
    key: 'deleteReply',
    value: function deleteReply(reply) {
      var currentUser = this.props.user.currentUser;

      if (currentUser == null) {
        (0, _sweetalert2.default)({
          title: 'Oops...',
          text: 'Please Login or Register',
          icon: 'error'
        });
        return;
      }

      this.props.deleteReply(reply).then(function () {}).catch(function (err) {
        console.log(err);
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var _this3 = this;

      var replies = this.props.reply[this.props.postId];
      var currentUser = this.props.user.currentUser;

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
              'ul',
              { className: 'list-group' },
              replies == null ? _react2.default.createElement(
                'div',
                null,
                'No Replies'
              ) : replies.map(function (reply) {
                return _react2.default.createElement(
                  'li',
                  { key: reply.id, className: 'list-group-item list-group-item-secondary' },
                  _react2.default.createElement(
                    'div',
                    { className: 'row' },
                    _this3.state.editShow === false ? _react2.default.createElement(
                      'div',
                      { className: 'col-auto mr-auto' },
                      reply.text,
                      _react2.default.createElement('br', null),
                      '~ ',
                      _react2.default.createElement(
                        _reactRouterDom.Link,
                        { to: 'profile/' + reply.user.id },
                        reply.user.username
                      )
                    ) : _react2.default.createElement(
                      'div',
                      { className: 'col-auto mr-auto', style: { marginLeft: '10px' } },
                      _react2.default.createElement(_view.UpdateReply, {
                        onCreate: _this3.updateReply.bind(_this3, reply),
                        currentReply: reply
                      })
                    ),
                    currentUser == null ? null : currentUser.id !== reply.user.id ? null : [_react2.default.createElement(
                      'div',
                      { key: '1', className: 'col-auto' },
                      _react2.default.createElement(
                        'button',
                        {
                          onClick: function onClick() {
                            _this3.setState({ editShow: !_this3.state.editShow });
                          },
                          className: 'btn btn-success btn-sm'
                        },
                        'Edit'
                      )
                    ), _react2.default.createElement(
                      'div',
                      { key: '2', className: 'col-auto' },
                      _react2.default.createElement(
                        'button',
                        {
                          onClick: _this3.deleteReply.bind(_this3, reply),
                          className: 'btn btn-danger btn-sm'
                        },
                        'Delete'
                      )
                    )],
                    _react2.default.createElement(
                      'div',
                      { className: 'col-auto text-muted' },
                      _utils.DateUtils.relativeTime(reply.timestamp)
                    )
                  )
                );
              })
            )
          )
        ),
        _react2.default.createElement(_view.CreateReply, { onCreate: this.createReply.bind(this) })
      );
    }
  }]);

  return Reply;
}(_react.Component);

var stateToProps = function stateToProps(state) {
  return {
    user: state.user,
    reply: state.reply
  };
};

var dispatchToProps = function dispatchToProps(dispatch) {
  return {
    createReply: function createReply(params) {
      return dispatch(_actions2.default.createReply(params));
    },
    getReplies: function getReplies(params) {
      return dispatch(_actions2.default.getReplies(params));
    },
    deleteReply: function deleteReply(entity) {
      return dispatch(_actions2.default.deleteReply(entity));
    },
    updateReply: function updateReply(entity, params) {
      return dispatch(_actions2.default.updateReply(entity, params));
    }
  };
};

exports.default = (0, _reactRedux.connect)(stateToProps, dispatchToProps)(Reply);