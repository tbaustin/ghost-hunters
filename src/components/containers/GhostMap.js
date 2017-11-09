import React, { Component } from 'react';
import { connect } from 'react-redux';

import actions from '../../actions';
import { MapComponent } from '../../utils';

class GhostMap extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isMarkerShown: false
    };
  }

  delayedShowMarker() {
    setTimeout(() => {
      this.setState({ isMarkerShown: true });
    }, 3000);
  }

  handleMarkerClick = () => {
    this.setState({ isMarkerShown: false });
    this.delayedShowMarker();
  };

  render() {
    return (
      <div>
        <MapComponent
          isMarkerShown={this.state.isMarkerShown}
          onMarkerClick={this.handleMarkerClick}
        />
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
