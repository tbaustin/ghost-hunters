'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MapComponent = undefined;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _recompose = require('recompose');

var _reactGoogleMaps = require('react-google-maps');

var _config = require('../config');

var _config2 = _interopRequireDefault(_config);

var _view = require('../components/view');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var MapComponent = exports.MapComponent = (0, _recompose.compose)((0, _recompose.withProps)({
  googleMapURL: 'https://maps.googleapis.com/maps/api/js?key=' + _config2.default.GOOGLE_API_KEY + '&v=3.exp&libraries=geometry,drawing,places',
  loadingElement: _react2.default.createElement('div', { style: { height: '100%' } }),
  containerElement: _react2.default.createElement('div', { style: { height: '500px' } }),
  mapElement: _react2.default.createElement('div', { style: { height: '100%' } })
}), _reactGoogleMaps.withScriptjs, _reactGoogleMaps.withGoogleMap)(function (props) {
  return _react2.default.createElement(
    _reactGoogleMaps.GoogleMap,
    { defaultZoom: 8, center: props.center },
    props.isMarkerShown && props.center && _react2.default.createElement(
      _reactGoogleMaps.Marker,
      { position: props.center, title: "User's Location", onClick: props.onHomeMarkerClick },
      _react2.default.createElement(
        _reactGoogleMaps.InfoWindow,
        null,
        _react2.default.createElement(
          'div',
          null,
          'User\'s Location'
        )
      )
    ),
    props.markers.map(function (marker, i) {
      var onClick = function onClick() {
        return props.onMarkerClick(marker);
      };
      var onCloseClick = function onCloseClick() {
        return props.onCloseClick(marker);
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
});