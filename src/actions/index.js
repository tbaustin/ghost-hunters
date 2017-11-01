import constants from '../constants';
import { TurboClient } from '../utils';

export default {
  fetchUsers: params => {
    return dispatch => {
      return dispatch(TurboClient.getRequest('user', params, constants.USERS_RECEIVED));
    };
  },

  addUser: params => {
    return dispatch => {
      return dispatch(TurboClient.postRequest('user', params, constants.USER_CREATED));
    };
  },

  // Unlike addUser, register() also maintains a session for login state. After calling
  // TurboClient.createUser(), the new user is logged in as well:
  register: params => {
    return dispatch => {
      return dispatch(TurboClient.createUser(params, constants.USER_CREATED));
    };
  },

  loginUser: credentials => {
    return dispatch => {
      return dispatch(TurboClient.login(credentials, constants.CURRENT_USER_RECEIVED));
    };
  },

  logoutUser: () => {
    return dispatch => {
      return dispatch(TurboClient.logout(constants.USER_LOGGED_OUT));
    };
  },

  currentUser: () => {
    return dispatch => {
      return dispatch(TurboClient.currentUser(constants.CURRENT_USER_RECEIVED));
    };
  },

  getProfile: id => {
    return dispatch => {
      return dispatch(TurboClient.getOne('user', id, constants.GET_PROFILE));
    };
  },

  updateProfile: (currentUser, params) => {
    return dispatch => {
      return dispatch(
        TurboClient.putRequest('user', currentUser, params, constants.UPDATE_PROFILE)
      );
    };
  },

  deleteProfile: entity => {
    return dispatch => {
      return dispatch(TurboClient.deleteRequest('user', entity, constants.USER_DELETED));
    };
  },

  createPost: params => {
    return dispatch => {
      return dispatch(TurboClient.createPost(params, constants.POST_CREATED));
    };
  },

  fetchPosts: params => {
    return dispatch => {
      return dispatch(TurboClient.fetchPosts(params, constants.FETCH_POSTS));
    };
  },

  getRecord: id => {
    return dispatch => {
      return dispatch(TurboClient.getOne('record', id, constants.FETCH_POST));
    };
  },

  updateRecord: (entity, params) => {
    return dispatch => {
      return dispatch(TurboClient.putRequest('record', entity, params, constants.RECORD_UPDATED));
    };
  },

  deleteRecord: entity => {
    return dispatch => {
      return dispatch(TurboClient.deleteRequest('record', entity, constants.RECORD_DELETED));
    };
  },

  createReply: params => {
    return dispatch => {
      return dispatch(TurboClient.postRequest('reply', params, constants.REPLY_CREATED));
    };
  },

  deleteReply: entity => {
    return dispatch => {
      return dispatch(TurboClient.deleteRequest('reply', entity, constants.REPLY_DELETED));
    };
  },

  updateReply: (entity, params) => {
    return dispatch => {
      return dispatch(TurboClient.putRequest('reply', entity, params, constants.REPLY_UPDATED));
    };
  },

  getReplies: params => {
    return dispatch => {
      return dispatch(TurboClient.getRequest('reply', params, constants.GET_REPLIES));
    };
  }
};
