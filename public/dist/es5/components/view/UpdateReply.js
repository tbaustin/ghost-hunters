"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var UpdateReply = function (_Component) {
  _inherits(UpdateReply, _Component);

  function UpdateReply() {
    _classCallCheck(this, UpdateReply);

    var _this = _possibleConstructorReturn(this, (UpdateReply.__proto__ || Object.getPrototypeOf(UpdateReply)).call(this));

    _this.state = {
      reply: {}
    };
    return _this;
  }

  _createClass(UpdateReply, [{
    key: "updateReply",
    value: function updateReply(attr, event) {
      event.preventDefault();
      var updated = Object.assign({}, this.state.reply);
      updated[attr] = event.target.value;
      this.setState({
        reply: updated
      });
    }
  }, {
    key: "createUpdatedReply",
    value: function createUpdatedReply(event) {
      event.preventDefault();
      this.props.onCreate(this.state.reply);
    }
  }, {
    key: "render",
    value: function render() {
      var reply = this.state.reply;
      var currentReply = this.props.currentReply;

      return _react2.default.createElement(
        "div",
        null,
        _react2.default.createElement(
          "div",
          { className: "row" },
          _react2.default.createElement(
            "div",
            { className: "row" },
            _react2.default.createElement(
              "div",
              { className: "form-group col-sm-10" },
              _react2.default.createElement("textarea", {
                onChange: this.updateReply.bind(this, 'text'),
                defaultValue: currentReply.text || 'Comment',
                className: "form-control",
                rows: "2"
              })
            ),
            _react2.default.createElement(
              "div",
              { className: "col-sm-2" },
              _react2.default.createElement(
                "button",
                { onClick: this.createUpdatedReply.bind(this), className: "btn btn-info btn-sm" },
                "Update"
              )
            )
          )
        )
      );
    }
  }]);

  return UpdateReply;
}(_react.Component);

exports.default = UpdateReply;