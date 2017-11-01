'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRedux = require('react-redux');

var _sweetalert2AllMin = require('sweetalert2/dist/sweetalert2.all.min.js');

var _sweetalert2AllMin2 = _interopRequireDefault(_sweetalert2AllMin);

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

  function Profile() {
    _classCallCheck(this, Profile);

    var _this = _possibleConstructorReturn(this, (Profile.__proto__ || Object.getPrototypeOf(Profile)).call(this));

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
    return _this;
  }

  _createClass(Profile, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var id = this.props.match.params.id;


      if (this.props.profiles[id] != null) {
        return;
      }

      this.props.getProfile(id).then(function () {}).catch(function (err) {
        console.log(err);
      });
    }
  }, {
    key: 'createUpdatedProfile',
    value: function createUpdatedProfile(params) {
      var id = this.props.match.params.id;

      var profile = this.props.profiles[id];
      var currentUser = this.props.user.currentUser;


      if (currentUser.id !== profile.id) {
        (0, _sweetalert2AllMin2.default)({
          title: 'Oops...',
          text: 'You do not own this profile',
          type: 'error'
        });

        return;
      }

      this.props.updateProfile(currentUser, params).then(function (response) {
        (0, _sweetalert2AllMin2.default)({
          title: response.username + ' Updated!',
          text: 'Thank you for updating your profile',
          type: 'success'
        });
      }).catch(function (err) {
        console.log(err);
      });
    }
  }, {
    key: 'deleteProfile',
    value: function deleteProfile() {
      var _this2 = this;

      var id = this.props.match.params.id;

      var profile = this.props.profiles[id];
      var currentUser = this.props.user.currentUser;


      if (currentUser.id !== profile.id) {
        (0, _sweetalert2AllMin2.default)({
          title: 'Oops...',
          text: 'You do not own this profile',
          type: 'error'
        });

        return;
      }

      (0, _sweetalert2AllMin2.default)({
        title: 'Are you sure?',
        text: 'Your Profile will be lost forever!',
        type: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
      }).then(function () {
        var userPosts = _this2.props.post.all.filter(function (p) {
          return p.profile.id === profile.id;
        });
        var userReplies = _this2.props.reply.all.filter(function (r) {
          return r.user.id === profile.id;
        });
        userPosts.map(function (post) {
          _this2.props.deleteRecord(post);
        });
        userReplies.map(function (reply) {
          _this2.props.deleteReply(reply);
        });
        _this2.props.deleteProfile(profile).then(function (data) {
          return _this2.props.logoutUser();
        }).then(function (data) {
          _this2.props.history.push('/');
          (0, _sweetalert2AllMin2.default)('Deleted!', 'Your Profile has been deleted.', 'success');
          return null;
        }).catch(function (err) {
          console.log(err);
        });
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var id = this.props.match.params.id;

      var profile = this.props.profiles[id];
      var currentUser = this.props.user.currentUser;

      var defaultProfile = this.state.profile;
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
                'User since: ',
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
          currentUser == null ? null : currentUser.id !== profile.id ? null : _react2.default.createElement(
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
    updateProfile: function updateProfile(currentUser, params) {
      return dispatch(_actions2.default.updateProfile(currentUser, params));
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
    }
  };
};

exports.default = {
  component: (0, _reactRedux.connect)(stateToProps, dispatchToProps)(Profile)
};