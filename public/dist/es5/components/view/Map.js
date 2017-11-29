'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactGoogleMaps = require('react-google-maps');

var _view = require('../view');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Map = function (_Component) {
  _inherits(Map, _Component);

  function Map() {
    _classCallCheck(this, Map);

    var _this = _possibleConstructorReturn(this, (Map.__proto__ || Object.getPrototypeOf(Map)).call(this));

    _this.state = {
      map: null
    };
    return _this;
  }

  _createClass(Map, [{
    key: 'mapMoved',
    value: function mapMoved() {
      // console.log('mapMoved: '+JSON.stringify(this.state.map.getCenter()))
      if (this.props.locationChanged != null) this.props.locationChanged(this.state.map.getCenter());
    }
  }, {
    key: 'zoomChanged',
    value: function zoomChanged() {
      // console.log('zoomChanged: '+this.state.map.getZoom())
    }
  }, {
    key: 'mapLoaded',
    value: function mapLoaded(map) {
      if (this.state.map != null) return;

      this.props.onMapReady(map);
      this.setState({
        map: map
      });
    }
  }, {
    key: 'handleMarkerClick',
    value: function handleMarkerClick(marker) {
      if (this.props.markerClicked != null) this.props.markerClicked(marker, this.state.map);
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var markers = this.props.markers || [];

      return _react2.default.createElement(
        _reactGoogleMaps.GoogleMap,
        {
          ref: this.mapLoaded.bind(this),
          onDragEnd: this.mapMoved.bind(this),
          onZoomChanged: this.zoomChanged.bind(this),
          defaultZoom: this.props.zoom,
          defaultCenter: this.props.center
        },
        markers.map(function (marker, i) {
          var onClick = function onClick() {
            return _this2.props.onMarkerClick(marker);
          };
          var onCloseClick = function onCloseClick() {
            return _this2.props.onCloseClick(marker);
          };

          return _react2.default.createElement(
            _reactGoogleMaps.Marker,
            { key: i, position: marker.position, title: marker.title, onClick: onClick },
            marker.showInfo && _react2.default.createElement(
              _reactGoogleMaps.InfoWindow,
              { onCloseClick: onCloseClick },
              _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement(_view.MarkerInfo, { marker: marker })
              )
            )
          );
        })
      );
    }
  }]);

  return Map;
}(_react.Component);

exports.default = (0, _reactGoogleMaps.withGoogleMap)(Map);