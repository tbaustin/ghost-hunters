import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';

import actions from '../../actions';
import { DateUtils } from '../../utils';

class UsersList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      profile: {
        image:
          'https://lh3.googleusercontent.com/EJf2u6azJe-TA6YeMWpDtMHAG6u3i1S1DhbiUXViaF5Pyg_CPEOCOEquKbX3U-drH29oYe98xKJiWqYP1ZxPGUQ545k',
        bannerImage:
          'https://lh3.googleusercontent.com/RAdfZt76XmM5p_rXwVsfQ3J8ca9aQUgONQaXSE1cC0bR0xETrKAoX8OEOzID-ro_3vFfgO8ZMQIqmjTiaCvuK4GtzI8',
        firstName: 'First Name',
        lastName: 'Last Name',
        email: 'Contact Email'
      }
    };
  }

  componentDidMount() {
    if (this.props.users.all.length > 0) {
      return;
    }

    this.props.fetchUsers();
  }

  head() {
    return (
      <Helmet>
        <title>{`${this.props.users.all.length || ''} Users Loaded`}</title>
        <meta property="og:title" content="Ghosts App" />
      </Helmet>
    );
  }

  render() {
    const users = this.props.users.all;
    const { firstName, lastName, image, email, bannerImage } = this.state.profile;
    return (
      <div>
        {this.head()}
        <div className="row">
          <div className="col-sm-12">
            <div className="card-columns">
              {users
                ? users.map(user => {
                    return (
                      <div
                        key={user.id}
                        className="card text-white bg-dark mb-3"
                        style={{ maxWidth: '20rem' }}
                      >
                        <div className="card-header">
                          <Link to={`/profile/${user.id}`}>
                            <img
                              className="card-img-top"
                              src={user.image.length == 0 ? image : user.image}
                              alt="Card image cap"
                            />
                          </Link>
                        </div>
                        <div className="card-body text-white">
                          <h5 className="card-title" style={{ color: 'white' }}>
                            {user.firstName || firstName} {user.lastName || lastName}
                          </h5>
                          <hr />
                          <p className="card-text">{user.email || email}</p>
                          <span>
                            ~{' '}
                            <Link to={`/profile/${user.id}`} style={{ color: 'white' }}>
                              <strong>{user.username || 'Anonymous'}</strong>
                            </Link>
                          </span>
                        </div>
                        <div className="card-footer">
                          <small className="text-muted">
                            {DateUtils.relativeTime(user.timestamp)}
                          </small>
                        </div>
                      </div>
                    );
                  })
                : null}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const stateToProps = state => {
  return {
    users: state.user
  };
};

const dispatchToProps = dispatch => {
  return {
    fetchUsers: params => dispatch(actions.fetchUsers(params))
  };
};

const loadData = store => {
  return store.dispatch(actions.fetchUsers());
};

export default {
  loadData: loadData,
  component: connect(stateToProps, dispatchToProps)(UsersList)
};
