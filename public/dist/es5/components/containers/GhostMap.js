'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRedux = require('react-redux');

var _geolib = require('geolib');

var _geolib2 = _interopRequireDefault(_geolib);

var _reactGeolocated = require('react-geolocated');

var _axios = require('axios');

var _axios2 = _interopRequireDefault(_axios);

var _actions = require('../../actions');

var _actions2 = _interopRequireDefault(_actions);

var _utils = require('../../utils');

var _HOC = require('../HOC');

var _view = require('../view');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var GhostMap = function (_Component) {
  _inherits(GhostMap, _Component);

  function GhostMap(props) {
    _classCallCheck(this, GhostMap);

    var _this = _possibleConstructorReturn(this, (GhostMap.__proto__ || Object.getPrototypeOf(GhostMap)).call(this, props));

    _this.state = {
      map: null,
      currentLocation: null,
      radius: 100,
      markers: null
    };

    _this.handleMarkerClick = _this.handleMarkerClick.bind(_this);
    _this.handleCloseClick = _this.handleCloseClick.bind(_this);
    _this.createMarkersWithinRadius = _this.createMarkersWithinRadius.bind(_this);
    _this.updateRadius = _this.updateRadius.bind(_this);
    return _this;
  }

  _createClass(GhostMap, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      if (this.props.posts.all) {
        return;
      }
      this.props.fetchPosts().then(function (data) {
        return data;
      }).catch(function (err) {
        console.log(err);
      });
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(props) {
      var _this2 = this;

      var posts = props.posts.all ? props.posts.all : [];
      if (props.coords) {
        this.setState({
          currentLocation: {
            lat: props.coords.latitude,
            lng: props.coords.longitude
          }
        });

        this.setState({
          markers: this.createMarkersWithinRadius(posts, this.state.radius, props.coords.latitude, props.coords.longitude)
        });
      } else {
        _axios2.default.get('http://ip-api.com/json').then(function (response) {
          _this2.setState({
            currentLocation: {
              lat: response.data.lat,
              lng: response.data.lon
            }
          });

          _this2.setState({
            markers: _this2.createMarkersWithinRadius(posts, _this2.state.radius, response.data.lat, response.data.lon)
          });
        }).catch(function (err) {
          console.log(err);
        });
      }
    }
  }, {
    key: 'createMarkersWithinRadius',
    value: function createMarkersWithinRadius(posts, radius, lat, lng) {
      var markers = [];
      var currentLocation = {
        latitude: lat,
        longitude: lng
      };

      posts.map(function (post) {
        var distanceArr = _geolib2.default.orderByDistance(currentLocation, [post.coords]);
        var miles = (distanceArr[0].distance / 1609.34).toFixed(2);

        if (miles <= radius) {
          markers.push({
            id: post.id,
            position: post.coords,
            title: post.title,
            description: post.text,
            image: post.image,
            showInfo: false
          });
        }
      });

      return markers;
    }
  }, {
    key: 'handleMarkerClick',
    value: function handleMarkerClick(targetMarker) {
      this.setState({
        markers: this.state.markers.map(function (marker) {
          return marker.id === targetMarker.id ? _extends({}, marker, { showInfo: !marker.showInfo }) : marker;
        })
      });
    }
  }, {
    key: 'handleCloseClick',
    value: function handleCloseClick(targetMarker) {
      this.setState({
        markers: this.state.markers.map(function (marker) {
          if (marker._id === targetMarker._id) {
            return _extends({}, marker, {
              showInfo: false
            });
          }
          return marker;
        })
      });
    }
  }, {
    key: 'updateRadius',
    value: function updateRadius(event) {
      var radius = event.target.value;
      this.setState({
        radius: radius
      });
      var posts = this.props.posts.all;
      var _state$currentLocatio = this.state.currentLocation,
          lat = _state$currentLocatio.lat,
          lng = _state$currentLocatio.lng;

      if (typeof radius !== 'number') {
        alert('Please put in a number');
        return;
      }
      if (this.props.posts.all && this.state.currentLocation) {
        this.createMarkersWithinRadius(this.props.posts.all, radius, lat, lng);
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _this3 = this;

      var markers = this.state.markers;

      if (markers == null) {
        return _react2.default.createElement(
          'div',
          null,
          'Loading...'
        );
      }
      return _react2.default.createElement(
        'div',
        { className: 'row' },
        _react2.default.createElement(
          'div',
          { className: 'col-sm-4' },
          _react2.default.createElement(
            'div',
            { className: 'form-group' },
            _react2.default.createElement(
              'label',
              { htmlFor: 'text' },
              'Radius'
            ),
            _react2.default.createElement('input', {
              onChange: this.updateRadius,
              className: 'form-control',
              id: 'radius',
              type: 'Number',
              placeholder: 'Radius'
            })
          )
        ),
        _react2.default.createElement(
          'div',
          { className: 'col-sm-12', style: { height: '600px' } },
          _react2.default.createElement(_view.Map, {
            onMapReady: function onMapReady(map) {
              if (_this3.state.map != null) return;

              _this3.setState({
                map: map
              });
            },
            onMarkerClick: this.handleMarkerClick,
            center: this.state.currentLocation,
            markers: markers,
            zoom: 10,
            onCloseClick: this.handleCloseClick,
            containerElement: _react2.default.createElement('div', { style: { height: 100 + '%' } }),
            mapElement: _react2.default.createElement('div', { style: { height: 100 + '%' } })
          })
        )
      );
    }
  }]);

  return GhostMap;
}(_react.Component);

var stateToProps = function stateToProps(state) {
  return {
    posts: state.post
  };
};

var dispatchToProps = function dispatchToProps(dispatch) {
  return {
    fetchPosts: function fetchPosts() {
      return dispatch(_actions2.default.fetchPosts());
    }
  };
};

var loadData = function loadData(store) {
  return store.dispatch(_actions2.default.fetchPosts());
};

exports.default = {
  loadData: loadData,
  component: (0, _reactRedux.connect)(stateToProps, dispatchToProps)((0, _reactGeolocated.geolocated)({
    positionOptions: {
      enableHighAccuracy: false
    },
    userDecisionTimeout: 5000
  })((0, _HOC.requireAuth)(GhostMap)))
};