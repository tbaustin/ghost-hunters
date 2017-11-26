import React, { Component } from 'react';

class NotAuth extends Component {
  componentDidMount() {
    setTimeout(() => {
      this.props.history.push('/');
    }, 2000);
  }

  render() {
    return (
      <div>
        <h2>Please Login/Sign up to access this feature</h2>
      </div>
    );
  }
}

export default {
  component: NotAuth
};
