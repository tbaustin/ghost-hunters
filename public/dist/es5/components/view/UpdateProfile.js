'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _sweetalert = require('sweetalert');

var _sweetalert2 = _interopRequireDefault(_sweetalert);

var _reactDropzone = require('react-dropzone');

var _reactDropzone2 = _interopRequireDefault(_reactDropzone);

var _utils = require('../../utils');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var UpdateProfile = function (_Component) {
  _inherits(UpdateProfile, _Component);

  function UpdateProfile() {
    _classCallCheck(this, UpdateProfile);

    var _this = _possibleConstructorReturn(this, (UpdateProfile.__proto__ || Object.getPrototypeOf(UpdateProfile)).call(this));

    _this.state = {
      editShow: false,
      profile: {}
    };
    return _this;
  }

  _createClass(UpdateProfile, [{
    key: 'updateProfile',
    value: function updateProfile(attr, event) {
      event.preventDefault();
      var updated = Object.assign({}, this.state.profile);
      updated[attr] = event.target.value;
      this.setState({
        profile: updated
      });
    }
  }, {
    key: 'imageUpload',
    value: function imageUpload(attr, files) {
      var _this2 = this;

      var updated = Object.assign({}, this.state.profile);
      var file = files[0];
      var imageType = new RegExp(/^image[/](?:jpe?g|gif|png)$/);
      if (file.type.match(imageType) == null) {
        (0, _sweetalert2.default)({
          title: 'Unacceptable Image Type',
          text: 'Please only use .png .jpg .gif .jpeg',
          icon: 'error'
        });
        return;
      }

      _utils.TurboClient.uploadFile(file).then(function (data) {
        updated[attr] = data.result.url;
        _this2.setState({
          profile: updated
        });
        (0, _sweetalert2.default)({
          title: 'Image Uploaded',
          html: '<img src=\'' + data.result.url + '=s100\' />',
          icon: 'success'
        });
      }).catch(function (err) {
        console.log(err);
      });
    }
  }, {
    key: 'createUpdatedProfile',
    value: function createUpdatedProfile(event) {
      event.preventDefault();
      this.setState({
        editShow: false
      });
      this.props.onCreate(this.state.profile);
    }
  }, {
    key: 'render',
    value: function render() {
      var _this3 = this;

      var profile = this.state.profile;
      var currentProfile = this.props.currentProfile;

      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          'div',
          { className: 'row justify-content-center', style: { marginBottom: '100px' } },
          _react2.default.createElement(
            'div',
            { className: 'col-sm-6' },
            _react2.default.createElement(
              'a',
              { href: '#update_user' },
              _react2.default.createElement(
                'button',
                {
                  className: 'btn btn-warning btn-lg btn-block',
                  onClick: function onClick() {
                    _this3.setState({ editShow: !_this3.state.editShow });
                  }
                },
                'Edit Profile'
              )
            )
          )
        ),
        this.state.editShow == false ? null : _react2.default.createElement(
          'div',
          { className: 'row justify-content-center' },
          _react2.default.createElement(
            'div',
            { id: 'update_user' },
            _react2.default.createElement(
              'div',
              { className: 'row' },
              _react2.default.createElement(
                'div',
                { className: 'form-group col-md-6' },
                _react2.default.createElement(
                  'label',
                  { htmlFor: 'firstName' },
                  'First Name'
                ),
                _react2.default.createElement('input', {
                  onChange: this.updateProfile.bind(this, 'firstName'),
                  type: 'text',
                  className: 'form-control',
                  id: 'firstName',
                  defaultValue: currentProfile.firstName || 'First Name'
                })
              ),
              _react2.default.createElement(
                'div',
                { className: 'form-group col-md-6' },
                _react2.default.createElement(
                  'label',
                  { htmlFor: 'lastName' },
                  'Last Name'
                ),
                _react2.default.createElement('input', {
                  onChange: this.updateProfile.bind(this, 'lastName'),
                  type: 'text',
                  className: 'form-control',
                  id: 'lastName',
                  defaultValue: currentProfile.lastName || 'Last Name'
                })
              )
            ),
            _react2.default.createElement(
              'div',
              { className: 'row' },
              _react2.default.createElement(
                'div',
                { className: 'form-group col-md-12' },
                _react2.default.createElement(
                  'label',
                  { htmlFor: 'email' },
                  'Email address'
                ),
                _react2.default.createElement('input', {
                  onChange: this.updateProfile.bind(this, 'email'),
                  type: 'email',
                  className: 'form-control',
                  id: 'email',
                  'aria-describedby': 'emailHelp',
                  defaultValue: currentProfile.Email || 'Email'
                })
              )
            ),
            _react2.default.createElement(
              'div',
              { className: 'row' },
              _react2.default.createElement(
                'div',
                { className: 'form-group col-sm-12' },
                _react2.default.createElement(
                  'label',
                  { htmlFor: 'bio' },
                  'Biography'
                ),
                _react2.default.createElement('textarea', {
                  onChange: this.updateProfile.bind(this, 'bio'),
                  defaultValue: currentProfile.bio || 'Biography',
                  className: 'form-control',
                  id: 'bio',
                  rows: '4'
                })
              )
            ),
            _react2.default.createElement(
              'div',
              { className: 'row' },
              _react2.default.createElement(
                'div',
                { className: 'form-group col-sm-4' },
                _react2.default.createElement(
                  _reactDropzone2.default,
                  {
                    className: 'btn btn-warning',
                    onDrop: this.imageUpload.bind(this, 'image')
                  },
                  'Upload Image'
                )
              ),
              _react2.default.createElement(
                'div',
                { className: 'col-sm-4 ml-auto' },
                profile.image != null ? _react2.default.createElement('img', { src: profile.image + '=s150' }) : currentProfile.image != null ? _react2.default.createElement('img', { src: currentProfile.iamge + '=s150' }) : null
              )
            ),
            _react2.default.createElement(
              'div',
              { className: 'row', style: { marginTop: '15px' } },
              _react2.default.createElement(
                'div',
                { className: 'form-group col-sm-4' },
                _react2.default.createElement(
                  _reactDropzone2.default,
                  {
                    className: 'btn btn-info',
                    onDrop: this.imageUpload.bind(this, 'bannerImage')
                  },
                  'Upload Banner Image'
                )
              ),
              _react2.default.createElement(
                'div',
                { className: 'col-sm-6 ml-auto' },
                profile.bannerImage != null ? _react2.default.createElement('img', { src: profile.bannerImage + '=s200' }) : currentProfile.bannerImage != null ? _react2.default.createElement('img', { src: currentProfile.bannerImage + '=s200' }) : null
              )
            ),
            _react2.default.createElement('hr', { className: 'my-4' }),
            _react2.default.createElement(
              'button',
              {
                onClick: this.createUpdatedProfile.bind(this),
                className: 'btn btn-success',
                style: { marginBottom: '100px' }
              },
              'Update'
            )
          )
        )
      );
    }
  }]);

  return UpdateProfile;
}(_react.Component);

exports.default = UpdateProfile;