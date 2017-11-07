import React, { Component } from 'react';
import { connect } from 'react-redux';

import actions from '../../actions';

class GhostMap extends Component {
  render() {
    return (
      <div>
        <h2>This is the Map</h2>
      </div>
    );
  }
}

const stateToProps = state => {
  return {
    posts: state.post
  };
};

const dispatchToProps = dispatch => {
  return {
    fetchPosts: () => dispatch(actions.fetchPosts())
  };
};

const loadData = store => {
  return store.dispatch(actions.fetchPosts());
};

export default {
  loadData: loadData,
  component: connect(stateToProps, dispatchToProps)(GhostMap)
};
