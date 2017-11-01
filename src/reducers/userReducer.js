import constants from '../constants';

var initialState = {
  all: [],
  currentUser: null // signed in user
};

export default (state = initialState, action) => {
  let newState = Object.assign({}, state);

  switch (action.type) {
    case constants.CURRENT_USER_RECEIVED:
      newState['currentUser'] = action.data;
      return newState;

    case constants.USERS_RECEIVED:
      newState['all'] = action.data;
      return newState;

    case constants.USER_CREATED:
      let array = newState.all ? Object.assign([], newState.all) : [];
      array.unshift(action.data);
      newState['all'] = array;
      newState['currentUser'] = action.data;
      return newState;

    case constants.USER_LOGGED_OUT:
      newState['currentUser'] = action.data;
      return newState;

    case constants.USER_DELETED:
      return {
        ...state,
        currentUser: action.data,
        all: state.all.filter(user => user !== action.data.id)
      };

    default:
      return state;
  }
};
