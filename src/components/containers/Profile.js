import React, { Component } from 'react';
import { connect } from 'react-redux';
import swal from 'sweetalert';

import actions from '../../actions';
import { UpdateProfile } from '../view';
import { DateUtils } from '../../utils';

class Profile extends Component {
  constructor() {
    super();
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
  }

  componentDidMount() {
    const { id } = this.props.match.params;

    if (this.props.profiles[id] != null) {
      return;
    }

    this.props
      .getProfile(id)
      .then(() => {})
      .catch(err => {
        console.log(err);
      });
  }

  createUpdatedProfile(params) {
    const { id } = this.props.match.params;
    const profile = this.props.profiles[id];
    const { currentUser } = this.props.user;

    if (currentUser.id !== profile.id) {
      swal({
        title: 'Oops...',
        text: 'You do not own this profile',
        type: 'error'
      });

      return;
    }

    this.props
      .updateProfile(currentUser, params)
      .then(response => {
        swal({
          title: `${response.username} Updated!`,
          text: 'Thank you for updating your profile',
          type: 'success'
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
        type: 'error'
      });

      return;
    }

    swal({
      title: 'Are you sure?',
      text: 'Your Profile will be lost forever!',
      type: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then(() => {
      const userPosts = this.props.post.all.filter(p => p.profile.id === profile.id);
      const userReplies = this.props.reply.all.filter(r => r.user.id === profile.id);
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
    });
  }

  render() {
    const { id } = this.props.match.params;
    const profile = this.props.profiles[id];
    const { currentUser } = this.props.user;
    const defaultProfile = this.state.profile;
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
                  User since: {DateUtils.relativeTime(profile.timestamp)}
                </p>
                <hr className="my-4" />
                <p className="lead" style={{ border: '1px solid #e6e6e6', padding: '20px' }}>
                  {profile.bio || defaultProfile.bio}
                </p>
              </div>
            </div>
            {currentUser == null ? null : currentUser.id !== profile.id ? null : (
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
    updateProfile: (currentUser, params) => dispatch(actions.updateProfile(currentUser, params)),
    deleteProfile: entity => dispatch(actions.deleteProfile(entity)),
    deleteRecord: entity => dispatch(actions.deleteRecord(entity)),
    deleteReply: entity => dispatch(actions.deleteReply(entity)),
    logoutUser: () => dispatch(actions.logoutUser())
  };
};

const loadData = store => {
  return store.dispatch(actions.getProfile(this.props.match.params.id));
};

export default {
  loadData: loadData,
  component: connect(stateToProps, dispatchToProps)(Profile)
};
