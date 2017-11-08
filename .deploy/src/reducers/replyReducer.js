import constants from '../constants';

const initialState = {
  all: null
};

export default (state = initialState, action) => {
  let newState = Object.assign({}, state);
  const keys = Object.keys(newState);

  switch (action.type) {
    case constants.REPLY_CREATED:
      newState[action.data.postId].unshift(action.data);
      newState.all.unshift(action.data);
      return newState;

    case constants.GET_REPLIES:
      if (action.params.postId) {
        newState[action.params.postId] = action.data;
        return newState;
      }

      newState.all = action.data;
      return newState;

    case constants.USER_DELETED:
      keys.map(key => {
        newState[key] = newState[key].filter(reply => reply.user.id !== action.data.id);
      });

      return newState;

    case constants.RECORD_DELETED:
      delete newState[action.data.id];

      return newState;

    case constants.REPLY_DELETED:
      keys.map(key => {
        newState[key] = newState[key].filter(reply => reply.id !== action.data.id);
      });

      return newState;

    case constants.REPLY_UPDATED:
      keys.map(key => {
        newState[key] = newState[key].map(
          reply => (reply.id === action.data.id ? action.data : reply)
        );
      });

      return newState;

    default:
      return state;
  }
};
