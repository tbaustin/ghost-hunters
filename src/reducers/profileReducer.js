import constants from "../constants";

const initialState = {};

export default (state = initialState, action) => {
  const newState = { ...state };
  switch (action.type) {
    case constants.GET_PROFILE:
      return { ...state, [action.data.id]: action.data };

    case constants.UPDATE_PROFILE:
      return { ...state, [action.data.id]: action.data };

    case constants.USER_DELETED:
      delete newState[action.data.id];
      return newState;

    default:
      return state;
  }
};
