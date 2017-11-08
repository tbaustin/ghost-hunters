'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _constants = require('../constants');

var _constants2 = _interopRequireDefault(_constants);

var _utils = require('../utils');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  fetchUsers: function fetchUsers(params) {
    return function (dispatch) {
      return dispatch(_utils.TurboClient.getRequest('user', params, _constants2.default.USERS_RECEIVED));
    };
  },

  addUser: function addUser(params) {
    return function (dispatch) {
      return dispatch(_utils.TurboClient.postRequest('user', params, _constants2.default.USER_CREATED));
    };
  },

  // Unlike addUser, register() also maintains a session for login state. After calling
  // TurboClient.createUser(), the new user is logged in as well:
  register: function register(params) {
    return function (dispatch) {
      return dispatch(_utils.TurboClient.createUser(params, _constants2.default.USER_CREATED));
    };
  },

  loginUser: function loginUser(credentials) {
    return function (dispatch) {
      return dispatch(_utils.TurboClient.login(credentials, _constants2.default.CURRENT_USER_RECEIVED));
    };
  },

  logoutUser: function logoutUser() {
    return function (dispatch) {
      return dispatch(_utils.TurboClient.logout(_constants2.default.USER_LOGGED_OUT));
    };
  },

  currentUser: function currentUser() {
    return function (dispatch) {
      return dispatch(_utils.TurboClient.currentUser(_constants2.default.CURRENT_USER_RECEIVED));
    };
  },

  getProfile: function getProfile(id) {
    return function (dispatch) {
      return dispatch(_utils.TurboClient.getOne('user', id, _constants2.default.GET_PROFILE));
    };
  },

  updateProfile: function updateProfile(entity, params) {
    return function (dispatch) {
      return dispatch(_utils.TurboClient.putRequest('user', entity, params, _constants2.default.UPDATE_PROFILE));
    };
  },

  deleteProfile: function deleteProfile(entity) {
    return function (dispatch) {
      return dispatch(_utils.TurboClient.deleteRequest('user', entity, _constants2.default.USER_DELETED));
    };
  },

  createPost: function createPost(params) {
    return function (dispatch) {
      return dispatch(_utils.TurboClient.createPost(params, _constants2.default.POST_CREATED));
    };
  },

  fetchPosts: function fetchPosts(params) {
    return function (dispatch) {
      return dispatch(_utils.TurboClient.fetchPosts(params, _constants2.default.FETCH_POSTS));
    };
  },

  getRecord: function getRecord(id) {
    return function (dispatch) {
      return dispatch(_utils.TurboClient.getOne('record', id, _constants2.default.FETCH_POST));
    };
  },

  updateRecord: function updateRecord(entity, params) {
    return function (dispatch) {
      return dispatch(_utils.TurboClient.putRequest('record', entity, params, _constants2.default.RECORD_UPDATED));
    };
  },

  deleteRecord: function deleteRecord(entity) {
    return function (dispatch) {
      return dispatch(_utils.TurboClient.deleteRequest('record', entity, _constants2.default.RECORD_DELETED));
    };
  },

  createReply: function createReply(params) {
    return function (dispatch) {
      return dispatch(_utils.TurboClient.postRequest('reply', params, _constants2.default.REPLY_CREATED));
    };
  },

  deleteReply: function deleteReply(entity) {
    return function (dispatch) {
      return dispatch(_utils.TurboClient.deleteRequest('reply', entity, _constants2.default.REPLY_DELETED));
    };
  },

  updateReply: function updateReply(entity, params) {
    return function (dispatch) {
      return dispatch(_utils.TurboClient.putRequest('reply', entity, params, _constants2.default.REPLY_UPDATED));
    };
  },

  getReplies: function getReplies(params) {
    return function (dispatch) {
      return dispatch(_utils.TurboClient.getRequest('reply', params, _constants2.default.GET_REPLIES));
    };
  }
};