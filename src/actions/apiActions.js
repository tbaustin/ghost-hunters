import { APIManager } from '../utils';
import constants from '../constants';

const getRequest = (path, params, actionType) => {
  return dispatch => {
    return APIManager.get(path, params)
      .then(response => {
        const data = response.user || response.results || response.result || response.users || null;
        dispatch({
          type: actionType,
          data,
          params
        });

        return data;
      })
      .catch(err => {
        throw err;
      });
  };
};

const postRequest = (path, params, actionType) => {
  return dispatch => {
    return APIManager.post(path, params)
      .then(response => {
        const data = response.results || response.result || response.user || response.users;
        dispatch({
          type: actionType,
          data,
          params
        });

        return data;
      })
      .catch(err => {
        throw err;
      });
  };
};

const putRequest = (path, params, actionType) => {
  return dispatch => {
    return APIManager.put(path, params)
      .then(response => {
        const data = response.results || response.result || response.user || response.users;
        dispatch({
          type: actionType,
          data,
          params
        });

        return data;
      })
      .catch(err => {
        throw err;
      });
  };
};

const deleteRequest = (path, actionType) => {
  return dispatch => {
    return APIManager.delete(path)
      .then(response => {
        const data = response.results || response.result || response.user || response.users;
        dispatch({
          type: actionType,
          data
        });

        return data;
      })
      .catch(err => {
        throw err;
      });
  };
};

export default {
  apiRegister: params => {
    return dispatch => {
      return dispatch(postRequest('/api/users/register', params, constants.USER_CREATED));
    };
  },
  apiLogin: params => {
    return dispatch => {
      return dispatch(postRequest('/api/users/login', params, constants.USER_LOGGED_IN));
    };
  },
  apiCurrentUser: () => {
    return dispatch => {
      return dispatch(getRequest('/api/users/currentuser', null, constants.CURRENT_USER_RECEIVED));
    };
  },
  apiLogout: () => {
    return dispatch => {
      return dispatch(getRequest('/api/users/logout', null, constants.USER_LOGGED_OUT));
    };
  },
  apiUpdateUser: (params, id) => {
    return dispatch => {
      return dispatch(putRequest(`/api/users/update/${id}`, params, constants.UPDATE_PROFILE));
    };
  },
  apiDeleteUser: id => {
    return dispatch => {
      return dispatch(deleteRequest(`/api/users/delete/${id}`, constants.USER_DELETED));
    };
  },
  apiFetchUsers: params => {
    return dispatch => {
      return dispatch(getRequest('/api/users', params, constants.USERS_RECEIVED));
    };
  },
  apiFetchUser: id => {
    return dispatch => {
      return dispatch(`/api/users/${id}`, null, constants.GET_PROFILE);
    };
  }
};
