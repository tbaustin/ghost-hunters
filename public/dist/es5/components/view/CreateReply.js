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

var CreateReply = function (_Component) {
  _inherits(CreateReply, _Component);

  function CreateReply() {
    _classCallCheck(this, CreateReply);

    var _this = _possibleConstructorReturn(this, (CreateReply.__proto__ || Object.getPrototypeOf(CreateReply)).call(this));

    _this.state = {
      reply: {
        text: ''
      }
    };
    return _this;
  }

  _createClass(CreateReply, [{
    key: 'updateReply',
    value: function updateReply(attr, event) {
      event.preventDefault();
      var updated = Object.assign({}, this.state.reply);
      updated[attr] = event.target.value;
      this.setState({
        reply: updated
      });
    }
  }, {
    key: 'createReply',
    value: function createReply(event) {
      event.preventDefault();
      var text = this.state.reply.text;

      if (text.length == 0) {
        (0, _sweetalert2.default)({
          title: 'Oops...',
          text: 'Please provide some text',
          type: 'error'
        });
        return;
      }
      this.props.onCreate(this.state.reply);
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { className: 'row', style: { border: '1px solid #e6e6e6', padding: '20px' } },
        _react2.default.createElement(
          'div',
          { className: 'form-group col-sm-12' },
          _react2.default.createElement('textarea', {
            onChange: this.updateReply.bind(this, 'text'),
            className: 'form-control',
            rows: '3'
          })
        ),
        _react2.default.createElement(
          'div',
          { className: 'col-sm-12' },
          _react2.default.createElement(
            'button',
            { onClick: this.createReply.bind(this), className: 'btn btn-warning' },
            'Comment'
          )
        )
      );
    }
  }]);

  return CreateReply;
}(_react.Component);

exports.default = CreateReply;