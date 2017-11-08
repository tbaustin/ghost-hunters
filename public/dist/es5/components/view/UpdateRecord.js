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

var UpdateRecord = function (_Component) {
  _inherits(UpdateRecord, _Component);

  function UpdateRecord() {
    _classCallCheck(this, UpdateRecord);

    var _this = _possibleConstructorReturn(this, (UpdateRecord.__proto__ || Object.getPrototypeOf(UpdateRecord)).call(this));

    _this.state = {
      record: {}
    };
    return _this;
  }

  _createClass(UpdateRecord, [{
    key: 'updateRecord',
    value: function updateRecord(attr, event) {
      event.preventDefault();
      var updated = Object.assign({}, this.state.record);
      updated[attr] = event.target.value;
      this.setState({
        record: updated
      });
    }
  }, {
    key: 'imageUpload',
    value: function imageUpload(attr, files) {
      var _this2 = this;

      var updated = Object.assign({}, this.state.record);
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
          record: updated
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
    value: function videoUpload(attr, files) {
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
        updated[attr] = data.result.url;
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
    key: 'createUpdatedRecord',
    value: function createUpdatedRecord(event) {
      event.preventDefault();
      this.props.onCreate(this.state.record);
    }
  }, {
    key: 'render',
    value: function render() {
      var record = this.state.record;
      var currentRecord = this.props.currentRecord;

      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
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
                { className: 'form-group col-md-12' },
                _react2.default.createElement(
                  'label',
                  { htmlFor: 'firstName' },
                  'Title'
                ),
                _react2.default.createElement('input', {
                  onChange: this.updateRecord.bind(this, 'title'),
                  type: 'text',
                  className: 'form-control',
                  id: 'firstName',
                  defaultValue: currentRecord.title || 'Title'
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
                  { htmlFor: 'text' },
                  'Description'
                ),
                _react2.default.createElement('textarea', {
                  onChange: this.updateRecord.bind(this, 'text'),
                  defaultValue: currentRecord.text || 'Description',
                  className: 'form-control',
                  id: 'text',
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
                  { className: 'btn btn-warning', onDrop: this.imageUpload.bind(this, 'image') },
                  'Upload Image'
                )
              ),
              _react2.default.createElement(
                'div',
                { className: 'col-sm-4 ml-auto' },
                record.image != null ? _react2.default.createElement('img', { src: record.image + '=s150' }) : currentRecord.image != null ? _react2.default.createElement('img', { src: currentRecord.image + '=s150' }) : null
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
                  { className: 'btn btn-info', onDrop: this.videoUpload.bind(this, 'video') },
                  'Upload Video'
                )
              ),
              _react2.default.createElement(
                'div',
                { className: 'col-sm-6 ml-auto' },
                record.video != null ? _react2.default.createElement(
                  'div',
                  { 'class': 'alert alert-success', role: 'alert' },
                  'New Video Added!'
                ) : currentRecord.video != null ? _react2.default.createElement(
                  'div',
                  { 'class': 'alert alert-success', role: 'alert' },
                  'Video already attached to Post!'
                ) : null
              )
            ),
            _react2.default.createElement('hr', { className: 'my-4' }),
            _react2.default.createElement(
              'button',
              {
                onClick: this.createUpdatedRecord.bind(this),
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

  return UpdateRecord;
}(_react.Component);

exports.default = UpdateRecord;