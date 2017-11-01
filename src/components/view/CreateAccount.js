import React, { Component } from 'react';
import swal from 'sweetalert2/dist/sweetalert2.all.min.js';

class CreateAccount extends Component {
  constructor() {
    super();
    this.state = {
      account: {
        username: '',
        password: ''
      }
    };
  }

  updateAccount(attr, event) {
    event.preventDefault();
    let updated = Object.assign({}, this.state.account);
    updated[attr] = event.target.value;
    this.setState({
      account: updated
    });
  }

  register(event) {
    event.preventDefault();
    const { username, password } = this.state.account;
    if (username.length == 0) {
      swal({
        title: 'Oops...',
        text: 'You forgot your Username',
        type: 'error'
      });
      return;
    }
    if (password.length == 0) {
      swal({
        title: 'Oops...',
        text: 'You forgot your Password',
        type: 'error'
      });
      return;
    }
    this.props.onRegister(this.state.account);
  }

  login(event) {
    event.preventDefault();
    const { username, password } = this.state.account;
    if (username.length == 0) {
      swal({
        title: 'Oops...',
        text: 'You forgot your Username',
        type: 'error'
      });
      return;
    }
    if (password.length == 0) {
      swal({
        title: 'Oops...',
        text: 'You forgot your Password',
        type: 'error'
      });
      return;
    }
    this.props.onLogin(this.state.account);
  }

  render() {
    return (
      <div>
        <h2>Register/Login</h2>
        <div className="form-group">
          <label htmlFor="username">Username</label>
          <input
            onChange={this.updateAccount.bind(this, 'username')}
            className="form-control"
            id="username"
            type="text"
            placeholder="Username"
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            onChange={this.updateAccount.bind(this, 'password')}
            className="form-control"
            id="password"
            type="password"
            placeholder="Password"
          />
        </div>
        <div className="row">
          <div className="col-md-4">
            <button onClick={this.register.bind(this)} className="btn btn-primary">
              Register
            </button>
          </div>
          <div className="col-md-4">
            <button onClick={this.login.bind(this)} className="btn btn-success">
              Login
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default CreateAccount;
