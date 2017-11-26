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

// import { Link } from 'react-router-dom';

var Header = function (_Component) {
  _inherits(Header, _Component);

  function Header() {
    _classCallCheck(this, Header);

    return _possibleConstructorReturn(this, (Header.__proto__ || Object.getPrototypeOf(Header)).apply(this, arguments));
  }

  _createClass(Header, [{
    key: "render",
    value: function render() {
      return _react2.default.createElement(
        "nav",
        { className: "navbar navbar-expand-lg navbar-dark bg-dark" },
        _react2.default.createElement(
          "a",
          { className: "navbar-brand", href: "/" },
          "Ghost-Hunters"
        ),
        _react2.default.createElement(
          "button",
          {
            className: "navbar-toggler",
            type: "button",
            "data-toggle": "collapse",
            "data-target": "#navbarSupportedContent",
            "aria-controls": "navbarSupportedContent",
            "aria-expanded": "false",
            "aria-label": "Toggle navigation"
          },
          _react2.default.createElement("span", { className: "navbar-toggler-icon" })
        ),
        _react2.default.createElement(
          "div",
          { className: "collapse navbar-collapse", id: "navbarSupportedContent" },
          _react2.default.createElement(
            "ul",
            { className: "navbar-nav mr-auto" },
            _react2.default.createElement(
              "li",
              { className: "nav-item active" },
              _react2.default.createElement(
                "a",
                { className: "nav-link", href: "/" },
                "Posts ",
                _react2.default.createElement(
                  "span",
                  { className: "sr-only" },
                  "(current)"
                )
              )
            ),
            _react2.default.createElement(
              "li",
              { className: "nav-item" },
              _react2.default.createElement(
                "a",
                { className: "nav-link", href: "/users" },
                "Users"
              )
            ),
            _react2.default.createElement(
              "li",
              { className: "nav-item" },
              _react2.default.createElement(
                "a",
                { className: "nav-link", href: "/map" },
                "Map"
              )
            )
          )
        )
      );
    }
  }]);

  return Header;
}(_react.Component);

exports.default = Header;