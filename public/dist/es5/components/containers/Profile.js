'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRedux = require('react-redux');

var _sweetalert = require('sweetalert');

var _sweetalert2 = _interopRequireDefault(_sweetalert);

var _reactRouterDom = require('react-router-dom');

var _actions = require('../../actions');

var _actions2 = _interopRequireDefault(_actions);

var _view = require('../view');

var _utils = require('../../utils');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Profile = function (_Component) {
  _inherits(Profile, _Component);

  function Profile(props) {
    _classCallCheck(this, Profile);

    var _this = _possibleConstructorReturn(this, (Profile.__proto__ || Object.getPrototypeOf(Profile)).call(this, props));

    _this.state = {
      profile: {
        image: 'https://lh3.googleusercontent.com/EJf2u6azJe-TA6YeMWpDtMHAG6u3i1S1DhbiUXViaF5Pyg_CPEOCOEquKbX3U-drH29oYe98xKJiWqYP1ZxPGUQ545k',
        bannerImage: 'https://lh3.googleusercontent.com/RAdfZt76XmM5p_rXwVsfQ3J8ca9aQUgONQaXSE1cC0bR0xETrKAoX8OEOzID-ro_3vFfgO8ZMQIqmjTiaCvuK4GtzI8',
        firstName: 'First Name',
        lastName: 'Last Name',
        email: 'Contact Email',
        bio: 'Bio will go here'
      }
    };

    _this.deleteProfile = _this.deleteProfile.bind(_this);
    _this.fetchRequestsUsers = _this.fetchRequestsUsers.bind(_this);
    _this.acceptRequest = _this.acceptRequest.bind(_this);
    _this.declineRequest = _this.declineRequest.bind(_this);
    _this.fetchFriends = _this.fetchFriends.bind(_this);
    return _this;
  }

  _createClass(Profile, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _this2 = this;

      var id = this.props.match.params.id;
      var currentUser = this.props.user.currentUser;


      if (this.props.profiles[id] != null) {
        this.fetchRequestsUsers();
        this.fetchFriends();
        return;
      }

      this.props.getProfile(id).then(function () {
        _this2.fetchRequestsUsers();
        _this2.fetchFriends();
        return null;
      }).catch(function (err) {
        console.log(err);
      });
    }
  }, {
    key: 'fetchRequestsUsers',
    value: function fetchRequestsUsers() {
      var _this3 = this;

      var id = this.props.match.params.id;
      var currentUser = this.props.user.currentUser;

      var profile = this.props.profiles[id];

      if (currentUser != null && currentUser.id === profile.id && currentUser.friendRequests) {
        currentUser.friendRequests.map(function (request) {
          if (_this3.props.profiles[request] != null) {
            return;
          }
          _this3.props.getProfile(request).then(function (data) {
            return null;
          }).catch(function (err) {
            console.log(err);
          });
        });
      }
    }
  }, {
    key: 'fetchFriends',
    value: function fetchFriends() {
      var _this4 = this;

      var id = this.props.match.params.id;

      var profile = this.props.profiles[id];

      if (profile.friends) {
        profile.friends.map(function (friendId) {
          if (_this4.props.profiles[friendId] != null) {
            return;
          }

          _this4.props.getProfile(friendId).then(function () {
            return null;
          }).catch(function (err) {
            console.log(err);
          });
        });
      }
    }
  }, {
    key: 'createUpdatedProfile',
    value: function createUpdatedProfile(params) {
      var id = this.props.match.params.id;

      var profile = this.props.profiles[id];
      var currentUser = this.props.user.currentUser;


      if (currentUser.id !== profile.id) {
        (0, _sweetalert2.default)({
          title: 'Oops...',
          text: 'You do not own this profile',
          icon: 'error'
        });

        return;
      }

      this.props.updateProfile(currentUser, params).then(function (response) {
        (0, _sweetalert2.default)({
          title: response.username + ' Updated!',
          text: 'Thank you for updating your profile',
          icon: 'success'
        });
      }).catch(function (err) {
        console.log(err);
      });
    }
  }, {
    key: 'deleteProfile',
    value: function deleteProfile() {
      var _this5 = this;

      var id = this.props.match.params.id;

      var profile = this.props.profiles[id];
      var currentUser = this.props.user.currentUser;


      if (currentUser.id !== profile.id) {
        (0, _sweetalert2.default)({
          title: 'Oops...',
          text: 'You do not own this profile',
          icon: 'error'
        });

        return;
      }

      (0, _sweetalert2.default)({
        closeOnClickOutside: false,
        closeOnEsc: false,
        title: 'Are you sure?',
        text: 'All data related to profile will be deleted as well with the profile! If you wish to delete your profile you must type DELETE',
        icon: 'warning',
        dangerMode: true,
        buttons: true,
        content: 'input'
      }).then(function (value) {
        if (value === 'DELETE') {
          var userPosts = _this5.props.post.all.filter(function (p) {
            return p.profile.id === profile.id;
          });
          var userReplies = _this5.props.reply.all.filter(function (r) {
            return r.user.id === profile.id;
          });
          var _currentUser = _this5.props.user.currentUser;

          if (_currentUser.friends != null) {
            _currentUser.friends.map(function (friendId) {
              var friend = _this5.props.profiles[friendId];
              if (friend == null) {
                return;
              }

              var params = {};
              var friendsArr = friend.friends;
              var index = friendsArr.indexOf(_currentUser.id);
              if (index > -1) {
                friendsArr.splice(index, 1);
              }
              params.friends = friendsArr;
              _this5.props.updateProfile(friend, params);
            });
          }
          userPosts.map(function (post) {
            _this5.props.deleteRecord(post);
          });
          userReplies.map(function (reply) {
            _this5.props.deleteReply(reply);
          });
          _this5.props.deleteProfile(profile).then(function (data) {
            return _this5.props.logoutUser();
          }).then(function (data) {
            _this5.props.history.push('/');
            (0, _sweetalert2.default)('Deleted!', 'Your Profile has been deleted.', 'success');
            return null;
          }).catch(function (err) {
            console.log(err);
          });
        } else {
          (0, _sweetalert2.default)({
            title: 'Profile not deleted',
            text: 'Make sure you type "DELETE" with caps',
            icon: 'error'
          });
        }
      });
    }
  }, {
    key: 'addFriend',
    value: function addFriend() {
      var id = this.props.match.params.id;

      var profile = this.props.profiles[id];
      var currentUser = this.props.user.currentUser;

      if (currentUser == null || profile == null) {
        (0, _sweetalert2.default)({
          title: 'Oops...',
          text: 'Must be logged in, and user must exist',
          icon: 'error'
        });
        return;
      }
      var friendRequests = profile.friendRequests || [];
      var params = {};
      friendRequests.push(currentUser.id);
      params.friendRequests = friendRequests;
      this.props.updateProfile(profile, params).then(function () {
        (0, _sweetalert2.default)({
          title: 'Success',
          text: 'Friend Request Sent',
          icon: 'success'
        });
      }).catch(function (err) {
        console.log(err);
      });
    }
  }, {
    key: 'acceptRequest',
    value: function acceptRequest(requestId) {
      var _this6 = this;

      var id = this.props.match.params.id;

      var profile = this.props.profiles[requestId];
      var currentUserProfile = this.props.profiles[id];
      var currentUser = this.props.user.currentUser;


      if (currentUser == null || currentUser.id !== currentUserProfile.id) {
        return;
      }

      var reqArr = currentUser.friendRequests;
      var index = reqArr.indexOf(requestId);

      if (index > -1) {
        reqArr.splice(index, 1);
      }

      // User's params
      var userParams = {};
      var userFriends = currentUser.friends || [];
      if (userFriends.indexOf(requestId) === -1) {
        userFriends.push(requestId);
      }

      userParams.friendRequest = reqArr;
      userParams.friends = userFriends;

      // Requested Friends params
      var requestParams = {};
      var requestFriends = profile.friends || [];
      if (requestFriends.indexOf(currentUser.id) === -1) {
        requestFriends.push(currentUser.id);
      }

      requestParams.friends = requestFriends;

      this.props.updateProfile(currentUser, userParams).then(function () {
        return _this6.props.updateProfile(profile, requestParams);
      }).then(function (data) {
        (0, _sweetalert2.default)({
          title: 'Friend Request Accepted',
          text: data.username + ' is your friend',
          icon: 'success'
        });
      }).catch(function (err) {
        console.log(err);
      });
    }
  }, {
    key: 'declineRequest',
    value: function declineRequest(requestId) {
      var id = this.props.match.params.id;

      var profile = this.props.profiles[requestId];
      var currentUserProfile = this.props.profiles[id];
      var currentUser = this.props.user.currentUser;


      if (currentUser == null || currentUser.id !== currentUserProfile.id) {
        return;
      }

      var reqArr = currentUser.friendRequests;
      var index = reqArr.indexOf(requestId);

      if (index > -1) {
        reqArr.splice(index, 1);
      }

      var params = {};
      params.friendRequests = reqArr;
      this.props.updateProfile(currentUser, params).then(function () {
        (0, _sweetalert2.default)({
          title: 'Friend Request Declined',
          text: 'User will not be your friend',
          icon: 'error'
        });
      }).catch(function (err) {
        console.log(err);
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var _this7 = this;

      var id = this.props.match.params.id;

      var profile = this.props.profiles[id];
      var currentUser = this.props.user.currentUser;

      var defaultProfile = this.state.profile;

      var profileFriends = profile != null ? profile.friends || [] : [];
      var profileFriendRequests = profile != null ? profile.friendRequests || [] : [];
      var bannerUrl = profile == null ? defaultProfile.bannerImage : profile.bannerImage || defaultProfile.bannerImage;
      var bannerStyle = {
        backgroundImage: 'url(' + bannerUrl + ')',
        backgroundSize: '100%',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center'
      };
      var nameStyle = {
        background: 'rgba(255, 255, 255, 0.7)',
        borderRadius: '8px'
      };
      var imageStyle = {
        maxHeight: '150px',
        margin: '20px auto'
      };

      return _react2.default.createElement(
        'div',
        null,
        profile == null ? _react2.default.createElement(
          'div',
          null,
          _react2.default.createElement(
            'h1',
            null,
            'Profile no longer exists'
          )
        ) : _react2.default.createElement(
          'div',
          null,
          _react2.default.createElement('div', { className: 'list-group' }),
          currentUser != null && currentUser.id === profile.id && currentUser.friendRequests ? currentUser.friendRequests.map(function (request) {
            var requestedUser = _this7.props.profiles[request];
            if (requestedUser == null) {
              return;
            }
            return _react2.default.createElement(
              'div',
              {
                key: requestedUser.id,
                className: 'list-group-item list-group-item-action flex-column align-items-start'
              },
              _react2.default.createElement(
                'div',
                { className: 'row' },
                _react2.default.createElement(
                  'div',
                  { className: 'col-md-8' },
                  _react2.default.createElement(
                    'h3',
                    null,
                    requestedUser.username
                  )
                ),
                _react2.default.createElement(
                  'div',
                  { className: 'col-md-2' },
                  _react2.default.createElement(
                    'button',
                    {
                      onClick: function onClick() {
                        return _this7.acceptRequest(requestedUser.id);
                      },
                      className: 'btn btn-primary'
                    },
                    'Accept'
                  )
                ),
                _react2.default.createElement(
                  'div',
                  { className: 'col-md-2' },
                  _react2.default.createElement(
                    'button',
                    {
                      onClick: function onClick() {
                        return _this7.declineRequest(requestedUser.id);
                      },
                      className: 'btn btn-danger'
                    },
                    'Decline'
                  )
                )
              ),
              _react2.default.createElement(
                'div',
                { className: 'row' },
                _react2.default.createElement(
                  'div',
                  { className: 'col-md-12' },
                  _react2.default.createElement(
                    'p',
                    null,
                    'Has sent you a friend request'
                  )
                )
              )
            );
          }) : null,
          _react2.default.createElement(
            'div',
            { className: 'jumbotron jumbotron-fluid', style: bannerStyle },
            _react2.default.createElement(
              'div',
              { className: 'container', style: nameStyle },
              _react2.default.createElement('img', {
                src: profile.image || defaultProfile.image,
                style: imageStyle,
                className: 'rounded img-fluid mx-auto d-block'
              })
            )
          ),
          _react2.default.createElement(
            'div',
            { className: 'row' },
            _react2.default.createElement(
              'div',
              { className: 'col-sm-12' },
              _react2.default.createElement(
                'h1',
                { className: 'display-3 text-center' },
                profile.username
              ),
              _react2.default.createElement(
                'p',
                { className: 'lead text-center' },
                profile.firstName || defaultProfile.firstName,
                ' ',
                profile.lastName || defaultProfile.lastName
              ),
              _react2.default.createElement(
                'p',
                { className: 'lead text-center text-muted' },
                profile.email || defaultProfile.email
              ),
              _react2.default.createElement(
                'p',
                { className: 'text-center text-muted' },
                'Became a User: ',
                _utils.DateUtils.relativeTime(profile.timestamp)
              ),
              _react2.default.createElement('hr', { className: 'my-4' }),
              _react2.default.createElement(
                'p',
                { className: 'lead', style: { border: '1px solid #e6e6e6', padding: '20px' } },
                profile.bio || defaultProfile.bio
              )
            )
          ),
          profile.friends ? _react2.default.createElement(
            'div',
            { className: 'list-group' },
            _react2.default.createElement(
              'h2',
              { className: 'text-center' },
              'Friends'
            ),
            profile.friends.map(function (friendId) {
              var friend = _this7.props.profiles[friendId];
              if (friend == null) {
                return;
              }
              return _react2.default.createElement(
                _reactRouterDom.Link,
                {
                  to: '/profile/' + friend.id,
                  key: friend.id,
                  className: 'list-group-item list-group-item-action flex-column align-items-start col-md-12'
                },
                _react2.default.createElement(
                  'div',
                  { className: 'text-center' },
                  _react2.default.createElement(
                    'h4',
                    null,
                    friend.username
                  )
                )
              );
            })
          ) : null,
          currentUser == null ? null : currentUser.id !== profile.id ? _react2.default.createElement(
            'div',
            { className: 'row justify-content-center', style: { marginBottom: '100px' } },
            _react2.default.createElement(
              'div',
              { className: 'col-sm-6' },
              profileFriendRequests.indexOf(currentUser.id) === -1 ? profileFriends.indexOf(currentUser.id) === -1 ? _react2.default.createElement(
                'button',
                {
                  className: 'btn btn-primary btn-lg btn-block',
                  onClick: this.addFriend.bind(this)
                },
                'Add Friend'
              ) : _react2.default.createElement(
                'button',
                { className: 'btn btn-info btn-large btn-block' },
                'You are Friends'
              ) : _react2.default.createElement(
                'button',
                { className: 'btn btn-success btn-lg btn-block' },
                'Pending Friend Request'
              )
            )
          ) : _react2.default.createElement(
            'div',
            null,
            _react2.default.createElement(_view.UpdateProfile, {
              currentProfile: profile,
              onCreate: this.createUpdatedProfile.bind(this)
            }),
            _react2.default.createElement(
              'div',
              { className: 'row justify-content-center', style: { marginBottom: '100px' } },
              _react2.default.createElement(
                'div',
                { className: 'col-sm-6' },
                _react2.default.createElement(
                  'button',
                  {
                    className: 'btn btn-danger btn-lg btn-block',
                    onClick: this.deleteProfile
                  },
                  'DELETE Profile'
                )
              )
            )
          )
        )
      );
    }
  }]);

  return Profile;
}(_react.Component);

var stateToProps = function stateToProps(state) {
  return {
    profiles: state.profile,
    user: state.user,
    post: state.post,
    reply: state.reply
  };
};

var dispatchToProps = function dispatchToProps(dispatch) {
  return {
    getProfile: function getProfile(id) {
      return dispatch(_actions2.default.getProfile(id));
    },
    updateProfile: function updateProfile(entity, params) {
      return dispatch(_actions2.default.updateProfile(entity, params));
    },
    deleteProfile: function deleteProfile(entity) {
      return dispatch(_actions2.default.deleteProfile(entity));
    },
    deleteRecord: function deleteRecord(entity) {
      return dispatch(_actions2.default.deleteRecord(entity));
    },
    deleteReply: function deleteReply(entity) {
      return dispatch(_actions2.default.deleteReply(entity));
    },
    logoutUser: function logoutUser() {
      return dispatch(_actions2.default.logoutUser());
    },
    fetchUsers: function fetchUsers(params) {
      return dispatch(_actions2.default.fetchUsers(params));
    }
  };
};

var loadData = function loadData(store) {
  return store.dispatch(_actions2.default.getProfile(undefined.props.match.params.id));
};

exports.default = {
  loadData: loadData,
  component: (0, _reactRedux.connect)(stateToProps, dispatchToProps)(Profile)
};