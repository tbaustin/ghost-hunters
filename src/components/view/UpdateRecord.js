import React, { Component } from 'react';
import swal from 'sweetalert2/dist/sweetalert2.all.min.js';
import Dropzone from 'react-dropzone';

import { TurboClient } from '../../utils';

class UpdateRecord extends Component {
  constructor() {
    super();
    this.state = {
      record: {}
    };
  }

  updateRecord(attr, event) {
    event.preventDefault();
    let updated = Object.assign({}, this.state.record);
    updated[attr] = event.target.value;
    this.setState({
      record: updated
    });
  }

  imageUpload(attr, files) {
    let updated = Object.assign({}, this.state.record);
    const file = files[0];
    const imageType = new RegExp(/^image[/](?:jpe?g|gif|png)$/);
    if (file.type.match(imageType) == null) {
      swal({
        title: 'Unacceptable Image Type',
        text: 'Please only use .png .jpg .gif .jpeg',
        type: 'error'
      });
      return;
    }

    TurboClient.uploadFile(file)
      .then(data => {
        updated[attr] = data.result.url;
        this.setState({
          record: updated
        });
        swal({
          title: 'Image Uploaded',
          html: `<img src='${data.result.url}=s100' />`,
          type: 'success'
        });
      })
      .catch(err => {
        console.log(err);
      });
  }

  videoUpload(attr, files) {
    let updated = Object.assign({}, this.state.post);
    const file = files[0];
    const videoType = new RegExp(/^video\/(?:mp4|webm|ogg)$/);
    if (file.type.match(videoType == null)) {
      swal({
        title: 'Unacceptable Video Type',
        text: 'Please only use .webm .ogg .mp4',
        type: 'error'
      });
      return;
    }

    updated['videoType'] = file.type;

    TurboClient.uploadFile(file)
      .then(data => {
        updated[attr] = data.result.url;
        this.setState({
          post: updated
        });
        swal({
          title: 'Video Uploaded',
          text: `${data.result.name}`,
          type: 'success'
        });
      })
      .catch(err => {
        console.log(err);
      });
  }

  createUpdatedRecord(event) {
    event.preventDefault();
    this.props.onCreate(this.state.record);
  }

  render() {
    const { record } = this.state;
    const { currentRecord } = this.props;
    return (
      <div>
        <div className="row justify-content-center">
          <div id="update_user">
            <div className="row">
              <div className="form-group col-md-12">
                <label htmlFor="firstName">Title</label>
                <input
                  onChange={this.updateRecord.bind(this, 'title')}
                  type="text"
                  className="form-control"
                  id="firstName"
                  defaultValue={currentRecord.title || 'Title'}
                />
              </div>
            </div>

            <div className="row">
              <div className="form-group col-sm-12">
                <label htmlFor="text">Description</label>
                <textarea
                  onChange={this.updateRecord.bind(this, 'text')}
                  defaultValue={currentRecord.text || 'Description'}
                  className="form-control"
                  id="text"
                  rows="4"
                />
              </div>
            </div>
            <div className="row">
              <div className="form-group col-sm-4">
                <Dropzone className="btn btn-warning" onDrop={this.imageUpload.bind(this, 'image')}>
                  Upload Image
                </Dropzone>
              </div>
              <div className="col-sm-4 ml-auto">
                {record.image != null ? (
                  <img src={`${record.image}=s150`} />
                ) : currentRecord.image != null ? (
                  <img src={`${currentRecord.image}=s150`} />
                ) : null}
              </div>
            </div>
            <div className="row" style={{ marginTop: '15px' }}>
              <div className="form-group col-sm-4">
                <Dropzone className="btn btn-info" onDrop={this.videoUpload.bind(this, 'video')}>
                  Upload Video
                </Dropzone>
              </div>
              <div className="col-sm-6 ml-auto">
                {record.video != null ? (
                  <div class="alert alert-success" role="alert">
                    New Video Added!
                  </div>
                ) : currentRecord.video != null ? (
                  <div class="alert alert-success" role="alert">
                    Video already attached to Post!
                  </div>
                ) : null}
              </div>
            </div>
            <hr className="my-4" />
            <button onClick={this.createUpdatedRecord.bind(this)} className="btn btn-success" style={{ marginBottom: '100px' }}>
              Update
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default UpdateRecord;
