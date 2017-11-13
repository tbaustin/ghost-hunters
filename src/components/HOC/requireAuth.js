import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

export default ChildComponent => {
  class RequireAuth extends Component {
    render() {
      switch (this.props.user.currentUser) {
        case null:
          return <Redirect to="/" />;
        default:
          return <ChildComponent {...this.props} />;
      }
    }
  }

  const stateToProps = state => {
    return {
      user: state.user
    };
  };

  return connect(stateToProps)(RequireAuth);
};
