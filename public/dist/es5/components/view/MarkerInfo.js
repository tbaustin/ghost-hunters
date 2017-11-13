'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = require('react-router-dom');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var MarkerInfo = function (_Component) {
  _inherits(MarkerInfo, _Component);

  function MarkerInfo() {
    _classCallCheck(this, MarkerInfo);

    return _possibleConstructorReturn(this, (MarkerInfo.__proto__ || Object.getPrototypeOf(MarkerInfo)).apply(this, arguments));
  }

  _createClass(MarkerInfo, [{
    key: 'render',
    value: function render() {
      var marker = this.props.marker;

      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          'div',
          { className: 'card', style: { width: '10rem' } },
          _react2.default.createElement('img', { className: 'card-img-top', src: marker.image, alt: 'Card image cap' }),
          _react2.default.createElement(
            'div',
            { className: 'card-body' },
            _react2.default.createElement(
              'h4',
              { className: 'card-title' },
              marker.title
            ),
            _react2.default.createElement(
              'p',
              { className: 'card-text' },
              marker.description
            ),
            _react2.default.createElement(
              _reactRouterDom.Link,
              { to: '/post/' + marker.id, className: 'btn btn-primary' },
              'More'
            )
          )
        )
      );
    }
  }]);

  return MarkerInfo;
}(_react.Component);

exports.default = MarkerInfo;