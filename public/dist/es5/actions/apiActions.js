'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _utils = require('../utils');

var _constants = require('../constants');

var _constants2 = _interopRequireDefault(_constants);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var getRequest = function getRequest(path, params, actionType) {
  return function (dispatch) {
    return _utils.APIManager.get(path, params).then(function (response) {
      var data = response.user || response.results || response.result || response.users || null;
      dispatch({
        type: actionType,
        data: data,
        params: params
      });

      return data;
    }).catch(function (err) {
      throw err;
    });
  };
};

var postRequest = function postRequest(path, params, actionType) {
  return function (dispatch) {
    return _utils.APIManager.post(path, params).then(function (response) {
      var data = response.results || response.result || response.user || response.users;
      dispatch({
        type: actionType,
        data: data,
        params: params
      });

      return data;
    }).catch(function (err) {
      throw err;
    });
  };
};

var putRequest = function putRequest(path, params, actionType) {
  return function (dispatch) {
    return _utils.APIManager.put(path, params).then(function (response) {
      var data = response.results || response.result || response.user || response.users;
      dispatch({
        type: actionType,
        data: data,
        params: params
      });

      return data;
    }).catch(function (err) {
      throw err;
    });
  };
};

var deleteRequest = function deleteRequest(path, actionType) {
  return function (dispatch) {
    return _utils.APIManager.delete(path).then(function (response) {
      var data = response.results || response.result || response.user || response.users;
      dispatch({
        type: actionType,
        data: data
      });

      return data;
    }).catch(function (err) {
      throw err;
    });
  };
};

exports.default = {
  apiRegister: function apiRegister(params) {
    return function (dispatch) {
      return dispatch(postRequest('http://localhost:3000/api/users/register', params, _constants2.default.USER_CREATED));
    };
  },
  apiLogin: function apiLogin(params) {
    return function (dispatch) {
      return dispatch(postRequest('http://localhost:3000/api/users/login', params, _constants2.default.USER_LOGGED_IN));
    };
  },
  apiCurrentUser: function apiCurrentUser() {
    return function (dispatch) {
      return dispatch(getRequest('http://localhost:3000/api/users/currentuser', null, _constants2.default.CURRENT_USER_RECEIVED));
    };
  },
  apiLogout: function apiLogout() {
    return function (dispatch) {
      return dispatch(getRequest('http://localhost:3000/api/users/logout', null, _constants2.default.USER_LOGGED_OUT));
    };
  },
  apiUpdateUser: function apiUpdateUser(params, id) {
    return function (dispatch) {
      return dispatch(putRequest('http://localhost:3000/api/users/update/' + id, params, _constants2.default.UPDATE_PROFILE));
    };
  },
  apiDeleteUser: function apiDeleteUser(id) {
    return function (dispatch) {
      return dispatch(deleteRequest('http://localhost:3000/api/users/delete/' + id, _constants2.default.USER_DELETED));
    };
  },
  apiFetchUsers: function apiFetchUsers(params) {
    return function (dispatch) {
      return dispatch(getRequest('http://localhost:3000/users', params, _constants2.default.USERS_RECEIVED));
    };
  },
  apiFetchUser: function apiFetchUser(id) {
    return function (dispatch) {
      return dispatch('http://localhost:3000/api/users/' + id, null, _constants2.default.GET_PROFILE);
    };
  }
};