import constants from '../constants';

const initialState = {
  all: null
};

export default (state = initialState, action) => {
  switch (action.type) {
    case constants.POST_CREATED:
      return {
        ...state,
        all: state.all.concat(action.data),
        [action.data.id]: action.data
      };

    case constants.RECORD_UPDATED:
      return {
        ...state,
        [action.data.id]: action.data,
        all: state.all.map(item => (item.id === action.data.id ? action.data : item))
      };

    case constants.RECORD_DELETED:
      const newState = {
        ...state,
        all: state.all.filter(item => item.id !== action.data.id)
      };
      delete newState[action.data.id];

      return newState;

    case constants.FETCH_POSTS:
      const sortedData = action.data.sort((a, b) => {
        return new Date(b.timestamp) - new Date(a.timestamp);
      });
      return { ...state, all: sortedData };

    case constants.FETCH_POST:
      return { ...state, [action.data.id]: action.data };

    default:
      return state;
  }
};
