import React, { Component } from 'react';
import { connect } from 'react-redux';
import swal from 'sweetalert';
import { Link } from 'react-router-dom';

import { CreateAccount } from '../view';
import actions from '../../actions';

class Account extends Component {
  componentDidMount() {
    if (this.props.user.currentUser == null) {
      this.props
        .currentUser()
        .then(data => {
          return null;
        })
        .catch(err => {
          console.log(err);
        });
    }
  }

  register(params) {
    this.props
      .register(params)
      .then(data => {
        swal({
          title: `${data.username}`,
          text: 'Thank you for joining',
          icon: 'success'
        });
      })
      .catch(err => {
        alert(err);
      });
  }

  login(params) {
    this.props
      .loginUser(params)
      .then(data => {
        swal({
          title: `${data.username}`,
          text: 'Welcome Back!',
          icon: 'success'
        });
      })
      .catch(err => {
        alert(err);
      });
  }

  logout() {
    this.props
      .logoutUser()
      .then(data => {
        swal({
          title: 'User Logged Out',
          text: 'We hope to see you again',
          icon: 'success'
        });
      })
      .catch(err => {
        alert(err);
      });
  }

  render() {
    const { currentUser } = this.props.user;
    return (
      <div>
        {currentUser == null ? (
          <CreateAccount onRegister={this.register.bind(this)} onLogin={this.login.bind(this)} />
        ) : (
          <div>
            <div className="row">
              <div className="col-md-12">
                <h2>
                  <Link to={`/profile/${currentUser.id}`}>
                    {currentUser.username}
                    {'  '}
                    {currentUser.friendRequests && currentUser.friendRequests.length > 0 ? (
                      <span className="badge badge-primary">
                        {currentUser.friendRequests.length} Request (s)
                      </span>
                    ) : null}
                  </Link>
                </h2>
              </div>
            </div>
            <div className="row">
              <div className="col-md-4">
                <Link to={`profile/${currentUser.id}`} className="btn btn-info btn-sm">
                  Profile
                </Link>
              </div>
              <div className="col-md-4">
                <button onClick={this.logout.bind(this)} className="btn btn-danger btn-sm">
                  Logout
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    );
  }
}

const stateToProps = state => {
  return {
    user: state.user
  };
};

const dispatchToProps = dispatch => {
  return {
    register: params => dispatch(actions.register(params)),
    loginUser: params => dispatch(actions.loginUser(params)),
    currentUser: () => dispatch(actions.currentUser()),
    logoutUser: () => dispatch(actions.logoutUser())
  };
};

export default connect(stateToProps, dispatchToProps)(Account);
