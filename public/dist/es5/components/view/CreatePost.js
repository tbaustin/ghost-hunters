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

var CreatePost = function (_Component) {
  _inherits(CreatePost, _Component);

  function CreatePost() {
    _classCallCheck(this, CreatePost);

    var _this = _possibleConstructorReturn(this, (CreatePost.__proto__ || Object.getPrototypeOf(CreatePost)).call(this));

    _this.state = {
      post: {
        title: '',
        text: '',
        image: 'https://lh3.googleusercontent.com/jt6x5sv4Q06g2LB_hnSeEqFWfBt2OvIqNKeNBBJa-lzEvWMNy886eiXVPcjWK-zLIs6m9Tj9VZzjcDUuVVANQaZXhA',
        video: null
      }
    };
    return _this;
  }

  _createClass(CreatePost, [{
    key: 'updatePost',
    value: function updatePost(attr, event) {
      event.preventDefault();
      var updated = Object.assign({}, this.state.post);
      updated[attr] = event.target.value;

      this.setState({
        post: updated
      });
    }
  }, {
    key: 'imageUpload',
    value: function imageUpload(files) {
      var _this2 = this;

      var updated = Object.assign({}, this.state.post);
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
        updated['image'] = data.result.url;
        _this2.setState({
          post: updated
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
    key: 'videoUpload',
    value: function videoUpload(files) {
      var _this3 = this;

      var updated = Object.assign({}, this.state.post);
      var file = files[0];
      var videoType = new RegExp(/^video\/(?:mp4|webm|ogg)$/);
      if (file.type.match(videoType == null)) {
        (0, _sweetalert2.default)({
          title: 'Unacceptable Video Type',
          text: 'Please only use .webm .ogg .mp4',
          icon: 'error'
        });
        return;
      }

      updated['videoType'] = file.type;

      _utils.TurboClient.uploadFile(file).then(function (data) {
        updated['video'] = data.result.url;
        _this3.setState({
          post: updated
        });
        (0, _sweetalert2.default)({
          title: 'Video Uploaded',
          text: '' + data.result.name,
          icon: 'success'
        });
      }).catch(function (err) {
        console.log(err);
      });
    }
  }, {
    key: 'createPost',
    value: function createPost(event) {
      var _this4 = this;

      var updated = Object.assign({}, this.state.post);
      event.preventDefault();
      var _state$post = this.state.post,
          title = _state$post.title,
          text = _state$post.text,
          address = _state$post.address,
          city = _state$post.city,
          state = _state$post.state,
          zipCode = _state$post.zipCode;

      if (title.length == 0) {
        (0, _sweetalert2.default)({
          title: 'Oops...',
          text: 'Please include a Title',
          icon: 'error'
        });
        return;
      }
      if (text.length == 0) {
        (0, _sweetalert2.default)({
          title: 'Oops...',
          text: 'Please include some text',
          icon: 'error'
        });
        return;
      }

      (0, _utils.Geocode)(address, city, state, zipCode).then(function (response) {
        updated['coords'] = response;
        _this4.setState({
          post: updated
        });

        _this4.props.onCreate(_this4.state.post);
      }).catch(function (err) {
        console.log(err);
      });
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          'div',
          { className: 'form-group' },
          _react2.default.createElement(
            'label',
            { htmlFor: 'title' },
            'Title'
          ),
          _react2.default.createElement('input', {
            onChange: this.updatePost.bind(this, 'title'),
            className: 'form-control',
            id: 'title',
            type: 'text',
            placeholder: 'Title'
          })
        ),
        _react2.default.createElement(
          'div',
          { className: 'form-group' },
          _react2.default.createElement(
            'label',
            { htmlFor: 'text' },
            'Text'
          ),
          _react2.default.createElement('input', {
            onChange: this.updatePost.bind(this, 'text'),
            className: 'form-control',
            id: 'text',
            type: 'text',
            placeholder: 'Text'
          })
        ),
        _react2.default.createElement(
          'div',
          { className: 'row' },
          _react2.default.createElement(
            'div',
            { className: 'form-group col-md-12' },
            _react2.default.createElement(
              'label',
              { htmlFor: 'text' },
              'Address'
            ),
            _react2.default.createElement('input', {
              onChange: this.updatePost.bind(this, 'address'),
              className: 'form-control',
              id: 'address',
              type: 'text',
              placeholder: 'Address'
            })
          )
        ),
        _react2.default.createElement(
          'div',
          { className: 'row' },
          _react2.default.createElement(
            'div',
            { className: 'form-group col-md-6' },
            _react2.default.createElement(
              'label',
              { htmlFor: 'text' },
              'City'
            ),
            _react2.default.createElement('input', {
              onChange: this.updatePost.bind(this, 'city'),
              className: 'form-control',
              id: 'city',
              type: 'text',
              placeholder: 'City'
            })
          ),
          _react2.default.createElement(
            'div',
            { className: 'form-group col-md-6' },
            _react2.default.createElement(
              'label',
              { htmlFor: 'text' },
              'State'
            ),
            _react2.default.createElement('input', {
              onChange: this.updatePost.bind(this, 'state'),
              className: 'form-control',
              id: 'state',
              type: 'text',
              placeholder: 'State'
            })
          )
        ),
        _react2.default.createElement(
          'div',
          { className: 'row' },
          _react2.default.createElement(
            'div',
            { className: 'form-group col-md-6' },
            _react2.default.createElement(
              'label',
              { htmlFor: 'text' },
              'Zip Code'
            ),
            _react2.default.createElement('input', {
              onChange: this.updatePost.bind(this, 'zipCode'),
              className: 'form-control',
              id: 'zipCode',
              type: 'text',
              placeholder: 'Zip Code'
            })
          )
        ),
        _react2.default.createElement(
          'div',
          { className: 'row' },
          _react2.default.createElement(
            'div',
            { className: 'col-sm-6' },
            _react2.default.createElement(
              _reactDropzone2.default,
              { className: 'btn btn-success', onDrop: this.imageUpload.bind(this) },
              'Upload Image'
            )
          ),
          _react2.default.createElement(
            'div',
            { className: 'col-sm-6' },
            _react2.default.createElement(
              _reactDropzone2.default,
              { className: 'btn btn-warning', onDrop: this.videoUpload.bind(this) },
              'Upload Video'
            )
          )
        ),
        this.state.post.image.length == 0 ? null : _react2.default.createElement(
          'div',
          { className: 'row' },
          _react2.default.createElement(
            'div',
            { className: 'col-sm-12' },
            _react2.default.createElement('img', { src: this.state.post.image + '=s150', style: { paddingTop: '8px' } })
          )
        ),
        _react2.default.createElement(
          'div',
          { className: 'row' },
          _react2.default.createElement(
            'div',
            { className: 'col-sm-6', style: { paddingTop: '8px' } },
            _react2.default.createElement(
              'button',
              { onClick: this.createPost.bind(this), className: 'btn btn-primary' },
              'Submit'
            )
          ),
          this.state.post.video == null ? null : _react2.default.createElement(
            'div',
            { className: 'col-sm-6' },
            _react2.default.createElement(
              'h3',
              { style: { color: 'red', border: '1px dashed red', borderRadius: '8px' } },
              'Video Uploaded'
            )
          )
        )
      );
    }
  }]);

  return CreatePost;
}(_react.Component);

exports.default = CreatePost;