'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _axios = require('axios');

var _axios2 = _interopRequireDefault(_axios);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  get: function get(url, params) {
    return new Promise(function (resolve, reject) {
      _axios2.default.get(url, { params: params }).then(function (response) {
        if (response.data.confirmation !== 'success') {
          throw new Error(response.data.message);
        }
        resolve(response.data);
      }).catch(function (err) {
        reject(err || err.message);
      });
    });
  },

  post: function post(url, params) {
    return new Promise(function (resolve, reject) {
      _axios2.default.post(url, params).then(function (response) {
        if (response.data.confirmation !== 'success') {
          throw new Error(response.data.message);
        }
        resolve(response.data);
      }).catch(function (err) {
        reject(err || err.message);
      });
    });
  },

  put: function put(url, params) {
    return new Promise(function (resolve, reject) {
      _axios2.default.put(url, params).then(function (response) {
        if (response.data.confirmation !== 'success') {
          throw new Error(response.data.message);
        }
        resolve(response.data);
      }).catch(function (err) {
        reject(err || err.message);
      });
    });
  },

  delete: function _delete(url) {
    return new Promise(function (resolve, reject) {
      _axios2.default.delete(url).then(function (response) {
        if (response.data.confirmation !== 'success') {
          throw new Error(response.data.message);
        }
        resolve(response.data);
      }).catch(function (err) {
        reject(err || err.message);
      });
    });
  }
};