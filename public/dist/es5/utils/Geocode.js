'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _axios = require('axios');

var _axios2 = _interopRequireDefault(_axios);

var _config = require('../config');

var _config2 = _interopRequireDefault(_config);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (streetAddress, city, state, zipCode) {
  return new Promise(function (resolve, reject) {
    _axios2.default.get('https://maps.googleapis.com/maps/api/geocode/json?address=' + streetAddress.replace(/ /g, '+') + ',' + city + '+' + state + '+' + zipCode + '&key=' + _config2.default.GOOGLE_API_KEY).then(function (response) {
      resolve(response.data.results[0].geometry.location);
    }).catch(function (err) {
      reject(err);
    });
  });
};