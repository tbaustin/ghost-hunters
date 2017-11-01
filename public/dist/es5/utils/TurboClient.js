'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _turbo = require('turbo360');

var _turbo2 = _interopRequireDefault(_turbo);

var _package = require('../../package.json');

var _package2 = _interopRequireDefault(_package);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var APP_ID = _package2.default.app || '';

var postRequest = function postRequest(resource, params, actionType) {
  return function (dispatch) {
    return (0, _turbo2.default)({ site_id: APP_ID }).create(resource, params).then(function (data) {
      if (actionType != null) {
        dispatch({
          type: actionType,
          data: data
        });
      }

      return data;
    }).catch(function (err) {
      throw err;
    });
  };
};

var getRequest = function getRequest(resource, params, actionType) {
  return function (dispatch) {
    return (0, _turbo2.default)({ site_id: APP_ID }).fetch(resource, params).then(function (data) {
      if (actionType != null) {
        dispatch({
          type: actionType,
          params: params, // can be null
          data: data
        });
      }

      return data;
    }).catch(function (err) {
      throw err;
    });
  };
};

var getOne = function getOne(resource, id, actionType) {
  return function (dispatch) {
    return (0, _turbo2.default)({ site_id: APP_ID }).fetchOne(resource, id).then(function (data) {
      if (actionType != null) {
        dispatch({
          type: actionType,
          params: id, // can be null
          data: data
        });
      }

      return data;
    }).catch(function (err) {
      throw err;
    });
  };
};

var putRequest = function putRequest(resource, entity, params, actionType) {
  return function (dispatch) {
    return (0, _turbo2.default)({ site_id: APP_ID }).update(resource, entity, params).then(function (data) {
      if (actionType != null) {
        dispatch({
          type: actionType,
          data: data
        });
      }

      return data;
    }).catch(function (err) {
      throw err;
    });
  };
};

var deleteRequest = function deleteRequest(resource, entity, actionType) {
  return function (dispatch) {
    return (0, _turbo2.default)({ site_id: APP_ID }).remove(resource, entity).then(function (data) {
      if (actionType != null) {
        dispatch({
          type: actionType,
          data: data
        });
      }

      return data;
    }).catch(function (err) {
      throw err;
    });
  };
};

var createUser = function createUser(credentials, actionType) {
  return function (dispatch) {
    return (0, _turbo2.default)({ site_id: APP_ID }).createUser(credentials).then(function (data) {
      if (actionType != null) {
        dispatch({
          type: actionType,
          data: data
        });
      }

      return data;
    }).catch(function (err) {
      throw err;
    });
  };
};

var login = function login(credentials, actionType) {
  return function (dispatch) {
    return (0, _turbo2.default)({ site_id: APP_ID }).login(credentials).then(function (data) {
      if (actionType != null) {
        dispatch({
          type: actionType,
          data: data
        });
      }

      return data;
    }).catch(function (err) {
      throw err;
    });
  };
};

var logout = function logout(actionType) {
  return function (dispatch) {
    return (0, _turbo2.default)({ site_id: APP_ID }).logout().then(function (data) {
      if (actionType != null) {
        dispatch({
          type: actionType,
          data: data
        });
      }

      return data;
    }).catch(function (err) {
      throw err;
    });
  };
};

var currentUser = function currentUser(actionType) {
  return function (dispatch) {
    return (0, _turbo2.default)({ site_id: APP_ID }).currentUser().then(function (data) {
      if (actionType != null) {
        dispatch({
          type: actionType,
          data: data
        });
      }

      return data;
    }).catch(function (err) {
      throw err;
    });
  };
};

var uploadFile = function uploadFile(file) {
  return (0, _turbo2.default)({ site_id: APP_ID }).uploadFile(file); // returns a Promise
};

var createPost = function createPost(params, actionType) {
  return postRequest('record', params, actionType);
};

var fetchPosts = function fetchPosts(params, actionType) {
  return getRequest('record', params, actionType);
};

exports.default = {
  getRequest: getRequest,
  postRequest: postRequest,
  putRequest: putRequest,
  deleteRequest: deleteRequest,
  createUser: createUser,
  login: login,
  logout: logout,
  currentUser: currentUser,
  uploadFile: uploadFile,
  createPost: createPost,
  fetchPosts: fetchPosts,
  getOne: getOne
};