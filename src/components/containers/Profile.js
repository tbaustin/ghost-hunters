import React, { Component } from 'react';
import { connect } from 'react-redux';
import swal from 'sweetalert';
import { Link } from 'react-router-dom';

import actions from '../../actions';
import { UpdateProfile } from '../view';
import { DateUtils } from '../../utils';

class Profile extends Component {
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
        email: 'Contact Email',
        bio: 'Bio will go here'
      }
    };

    this.deleteProfile = this.deleteProfile.bind(this);
    this.fetchRequestsUsers = this.fetchRequestsUsers.bind(this);
    this.acceptRequest = this.acceptRequest.bind(this);
    this.declineRequest = this.declineRequest.bind(this);
    this.fetchFriends = this.fetchFriends.bind(this);
  }

  componentDidMount() {
    const { id } = this.props.match.params;
    const { currentUser } = this.props.user;

    if (this.props.profiles[id] != null) {
      this.fetchRequestsUsers();
      this.fetchFriends();
      return;
    }

    this.props
      .getProfile(id)
      .then(() => {
        this.fetchRequestsUsers();
        this.fetchFriends();
        return null;
      })
      .catch(err => {
        console.log(err);
      });
  }

  fetchRequestsUsers() {
    const { id } = this.props.match.params;
    const { currentUser } = this.props.user;
    const profile = this.props.profiles[id];

    if (currentUser != null && currentUser.id === profile.id && currentUser.friendRequests) {
      currentUser.friendRequests.map(request => {
        if (this.props.profiles[request] != null) {
          return;
        }
        this.props
          .getProfile(request)
          .then(data => {
            return null;
          })
          .catch(err => {
            console.log(err);
          });
      });
    }
  }

  fetchFriends() {
    const { id } = this.props.match.params;
    const profile = this.props.profiles[id];

    if (profile.friends) {
      profile.friends.map(friendId => {
        if (this.props.profiles[friendId] != null) {
          return;
        }

        this.props
          .getProfile(friendId)
          .then(() => {
            return null;
          })
          .catch(err => {
            console.log(err);
          });
      });
    }
  }

  createUpdatedProfile(params) {
    const { id } = this.props.match.params;
    const profile = this.props.profiles[id];
    const { currentUser } = this.props.user;

    if (currentUser.id !== profile.id) {
      swal({
        title: 'Oops...',
        text: 'You do not own this profile',
        icon: 'error'
      });

      return;
    }

    this.props
      .updateProfile(currentUser, params)
      .then(response => {
        swal({
          title: `${response.username} Updated!`,
          text: 'Thank you for updating your profile',
          icon: 'success'
        });
      })
      .catch(err => {
        console.log(err);
      });
  }

  deleteProfile() {
    const { id } = this.props.match.params;
    const profile = this.props.profiles[id];
    const { currentUser } = this.props.user;

    if (currentUser.id !== profile.id) {
      swal({
        title: 'Oops...',
        text: 'You do not own this profile',
        icon: 'error'
      });

      return;
    }

    swal({
      closeOnClickOutside: false,
      closeOnEsc: false,
      title: 'Are you sure?',
      text:
        'All data related to profile will be deleted as well with the profile! If you wish to delete your profile you must type DELETE',
      icon: 'warning',
      dangerMode: true,
      buttons: true,
      content: 'input'
    }).then(value => {
      if (value === 'DELETE') {
        const userPosts = this.props.post.all.filter(p => p.profile.id === profile.id);
        const userReplies = this.props.reply.all.filter(r => r.user.id === profile.id);
        const { currentUser } = this.props.user;
        if (currentUser.friends != null) {
          currentUser.friends.map(friendId => {
            const friend = this.props.profiles[friendId];
            if (friend == null) {
              return;
            }

            const params = {};
            const friendsArr = friend.friends;
            const index = friendsArr.indexOf(currentUser.id);
            if (index > -1) {
              friendsArr.splice(index, 1);
            }
            params.friends = friendsArr;
            this.props.updateProfile(friend, params);
          });
        }
        userPosts.map(post => {
          this.props.deleteRecord(post);
        });
        userReplies.map(reply => {
          this.props.deleteReply(reply);
        });
        this.props
          .deleteProfile(profile)
          .then(data => {
            return this.props.logoutUser();
          })
          .then(data => {
            this.props.history.push('/');
            swal('Deleted!', 'Your Profile has been deleted.', 'success');
            return null;
          })
          .catch(err => {
            console.log(err);
          });
      } else {
        swal({
          title: 'Profile not deleted',
          text: 'Make sure you type "DELETE" with caps',
          icon: 'error'
        });
      }
    });
  }

  addFriend() {
    const { id } = this.props.match.params;
    const profile = this.props.profiles[id];
    const { currentUser } = this.props.user;
    if (currentUser == null || profile == null) {
      swal({
        title: 'Oops...',
        text: 'Must be logged in, and user must exist',
        icon: 'error'
      });
      return;
    }
    const friendRequests = profile.friendRequests || [];
    const params = {};
    friendRequests.push(currentUser.id);
    params.friendRequests = friendRequests;
    this.props
      .updateProfile(profile, params)
      .then(() => {
        swal({
          title: 'Success',
          text: 'Friend Request Sent',
          icon: 'success'
        });
      })
      .catch(err => {
        console.log(err);
      });
  }

  deleteFriend() {
    const { id } = this.props.match.params;
    const profile = this.props.profiles[id];
    const { currentUser } = this.props.user;
    if (currentUser == null || profile == null || currentUser.id == profile.id) {
      swal({
        title: 'Oops...',
        text: 'Must be logged in, and user must exist',
        icon: 'error'
      });
      return;
    }

    // User's Friends
    const userFriends = currentUser.friends;
    const index = userFriends.indexOf(profile.id);
    if (index > -1) {
      userFriends.splice(index, 1);
    }
    const userParams = {};
    userParams.friends = userFriends;

    // Profile's Friends
    const profileFriends = profile.friends;
    const pIndex = profileFriends.indexOf(currentUser.id);
    if (pIndex > -1) {
      profileFriends.splice(pIndex, 1);
    }
    const profileParams = {};
    profileParams.friends = profileFriends;

    // Removing friend from each profiles
    this.props
      .updateProfile(currentUser, userParams)
      .then(() => {
        return this.props.updateProfile(profile, profileParams);
      })
      .then(data => {
        swal({
          title: 'Friend Deleted',
          text: `${data.username} is no longer your friend`,
          icon: 'success'
        });
      })
      .catch(err => {
        console.log(err);
      });
  }

  acceptRequest(requestId) {
    const { id } = this.props.match.params;
    const profile = this.props.profiles[requestId];
    const currentUserProfile = this.props.profiles[id];
    const { currentUser } = this.props.user;

    if (currentUser == null || currentUser.id !== currentUserProfile.id) {
      return;
    }

    const reqArr = currentUser.friendRequests;
    const index = reqArr.indexOf(requestId);

    if (index > -1) {
      reqArr.splice(index, 1);
    }

    // User's params
    const userParams = {};
    const userFriends = currentUser.friends || [];
    if (userFriends.indexOf(requestId) === -1) {
      userFriends.push(requestId);
    }

    userParams.friendRequest = reqArr;
    userParams.friends = userFriends;

    // Requested Friends params
    const requestParams = {};
    const requestFriends = profile.friends || [];
    if (requestFriends.indexOf(currentUser.id) === -1) {
      requestFriends.push(currentUser.id);
    }

    requestParams.friends = requestFriends;

    this.props
      .updateProfile(currentUser, userParams)
      .then(() => {
        return this.props.updateProfile(profile, requestParams);
      })
      .then(data => {
        swal({
          title: 'Friend Request Accepted',
          text: `${data.username} is your friend`,
          icon: 'success'
        });
      })
      .catch(err => {
        console.log(err);
      });
  }

  declineRequest(requestId) {
    const { id } = this.props.match.params;
    const profile = this.props.profiles[requestId];
    const currentUserProfile = this.props.profiles[id];
    const { currentUser } = this.props.user;

    if (currentUser == null || currentUser.id !== currentUserProfile.id) {
      return;
    }

    const reqArr = currentUser.friendRequests;
    const index = reqArr.indexOf(requestId);

    if (index > -1) {
      reqArr.splice(index, 1);
    }

    const params = {};
    params.friendRequests = reqArr;
    this.props
      .updateProfile(currentUser, params)
      .then(() => {
        swal({
          title: 'Friend Request Declined',
          text: 'User will not be your friend',
          icon: 'error'
        });
      })
      .catch(err => {
        console.log(err);
      });
  }

  render() {
    const { id } = this.props.match.params;
    const profile = this.props.profiles[id];
    const { currentUser } = this.props.user;
    const defaultProfile = this.state.profile;

    const profileFriends = profile != null ? profile.friends || [] : [];
    const profileFriendRequests = profile != null ? profile.friendRequests || [] : [];
    const bannerUrl =
      profile == null
        ? defaultProfile.bannerImage
        : profile.bannerImage || defaultProfile.bannerImage;
    const bannerStyle = {
      backgroundImage: `url(${bannerUrl})`,
      backgroundSize: '100%',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center'
    };
    const nameStyle = {
      background: 'rgba(255, 255, 255, 0.7)',
      borderRadius: '8px'
    };
    const imageStyle = {
      maxHeight: '150px',
      margin: '20px auto'
    };

    return (
      <div>
        {profile == null ? (
          <div>
            <h1>Profile no longer exists</h1>
          </div>
        ) : (
          <div>
            <div className="list-group" />
            {currentUser != null && currentUser.id === profile.id && currentUser.friendRequests
              ? currentUser.friendRequests.map(request => {
                  const requestedUser = this.props.profiles[request];
                  if (requestedUser == null) {
                    return;
                  }
                  return (
                    <div
                      key={requestedUser.id}
                      className="list-group-item list-group-item-action flex-column align-items-start"
                    >
                      <div className="row">
                        <div className="col-md-8">
                          <h3>{requestedUser.username}</h3>
                        </div>
                        <div className="col-md-2">
                          <button
                            onClick={() => this.acceptRequest(requestedUser.id)}
                            className="btn btn-primary"
                          >
                            Accept
                          </button>
                        </div>
                        <div className="col-md-2">
                          <button
                            onClick={() => this.declineRequest(requestedUser.id)}
                            className="btn btn-danger"
                          >
                            Decline
                          </button>
                        </div>
                      </div>

                      <div className="row">
                        <div className="col-md-12">
                          <p>Has sent you a friend request</p>
                        </div>
                      </div>
                    </div>
                  );
                })
              : null}
            <div className="jumbotron jumbotron-fluid" style={bannerStyle}>
              <div className="container" style={nameStyle}>
                <img
                  src={profile.image || defaultProfile.image}
                  style={imageStyle}
                  className="rounded img-fluid mx-auto d-block"
                />
              </div>
            </div>
            <div className="row">
              <div className="col-sm-12">
                <h1 className="display-3 text-center">{profile.username}</h1>
                <p className="lead text-center">
                  {profile.firstName || defaultProfile.firstName}{' '}
                  {profile.lastName || defaultProfile.lastName}
                </p>
                <p className="lead text-center text-muted">
                  {profile.email || defaultProfile.email}
                </p>
                <p className="text-center text-muted">
                  Became a User: {DateUtils.relativeTime(profile.timestamp)}
                </p>
                <hr className="my-4" />
                <p className="lead" style={{ border: '1px solid #e6e6e6', padding: '20px' }}>
                  {profile.bio || defaultProfile.bio}
                </p>
              </div>
            </div>
            {profile.friends ? (
              <div className="list-group">
                <h2 className="text-center">Friends</h2>
                {profile.friends.map(friendId => {
                  const friend = this.props.profiles[friendId];
                  if (friend == null) {
                    return;
                  }
                  return (
                    <Link
                      to={`/profile/${friend.id}`}
                      key={friend.id}
                      className="list-group-item list-group-item-action flex-column align-items-start col-md-12"
                    >
                      <div className="text-center">
                        <h4>{friend.username}</h4>
                      </div>
                    </Link>
                  );
                })}
              </div>
            ) : null}
            {currentUser == null ? null : currentUser.id !== profile.id ? (
              <div className="row justify-content-center" style={{ marginBottom: '100px' }}>
                <div className="col-sm-6">
                  {profileFriendRequests.indexOf(currentUser.id) === -1 ? (
                    profileFriends.indexOf(currentUser.id) === -1 ? (
                      <button
                        className="btn btn-primary btn-lg btn-block"
                        onClick={this.addFriend.bind(this)}
                      >
                        Add Friend
                      </button>
                    ) : (
                      <button
                        onClick={this.deleteFriend.bind(this)}
                        className="btn btn-danger btn-large btn-block"
                      >
                        Delete Friend
                      </button>
                    )
                  ) : (
                    <button className="btn btn-success btn-lg btn-block">
                      Pending Friend Request
                    </button>
                  )}
                </div>
              </div>
            ) : (
              <div>
                <UpdateProfile
                  currentProfile={profile}
                  onCreate={this.createUpdatedProfile.bind(this)}
                />
                <div className="row justify-content-center" style={{ marginBottom: '100px' }}>
                  <div className="col-sm-6">
                    <button
                      className="btn btn-danger btn-lg btn-block"
                      onClick={this.deleteProfile}
                    >
                      DELETE Profile
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    );
  }
}

const stateToProps = state => {
  return {
    profiles: state.profile,
    user: state.user,
    post: state.post,
    reply: state.reply
  };
};

const dispatchToProps = dispatch => {
  return {
    getProfile: id => dispatch(actions.getProfile(id)),
    updateProfile: (entity, params) => dispatch(actions.updateProfile(entity, params)),
    deleteProfile: entity => dispatch(actions.deleteProfile(entity)),
    deleteRecord: entity => dispatch(actions.deleteRecord(entity)),
    deleteReply: entity => dispatch(actions.deleteReply(entity)),
    logoutUser: () => dispatch(actions.logoutUser()),
    fetchUsers: params => dispatch(actions.fetchUsers(params))
  };
};

const loadData = store => {
  return store.dispatch(actions.getProfile(this.props.match.params.id));
};

export default {
  loadData: loadData,
  component: connect(stateToProps, dispatchToProps)(Profile)
};
