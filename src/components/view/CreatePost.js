import React, { Component } from 'react';
import swal from 'sweetalert';
import Dropzone from 'react-dropzone';

import { TurboClient, Geocode } from '../../utils';

class CreatePost extends Component {
  constructor() {
    super();
    this.state = {
      post: {
        title: '',
        text: '',
        image:
          'https://lh3.googleusercontent.com/jt6x5sv4Q06g2LB_hnSeEqFWfBt2OvIqNKeNBBJa-lzEvWMNy886eiXVPcjWK-zLIs6m9Tj9VZzjcDUuVVANQaZXhA',
        video: null
      }
    };
  }

  updatePost(attr, event) {
    event.preventDefault();
    let updated = Object.assign({}, this.state.post);
    updated[attr] = event.target.value;

    this.setState({
      post: updated
    });
  }

  imageUpload(files) {
    let updated = Object.assign({}, this.state.post);
    const file = files[0];
    const imageType = new RegExp(/^image[/](?:jpe?g|gif|png)$/);
    if (file.type.match(imageType) == null) {
      swal({
        title: 'Unacceptable Image Type',
        text: 'Please only use .png .jpg .gif .jpeg',
        icon: 'error'
      });
      return;
    }

    TurboClient.uploadFile(file)
      .then(data => {
        updated['image'] = data.result.url;
        this.setState({
          post: updated
        });
        swal({
          title: 'Image Uploaded',
          html: `<img src='${data.result.url}=s100' />`,
          icon: 'success'
        });
      })
      .catch(err => {
        console.log(err);
      });
  }

  videoUpload(files) {
    let updated = Object.assign({}, this.state.post);
    const file = files[0];
    const videoType = new RegExp(/^video\/(?:mp4|webm|ogg)$/);
    if (file.type.match(videoType == null)) {
      swal({
        title: 'Unacceptable Video Type',
        text: 'Please only use .webm .ogg .mp4',
        icon: 'error'
      });
      return;
    }

    updated['videoType'] = file.type;

    TurboClient.uploadFile(file)
      .then(data => {
        updated['video'] = data.result.url;
        this.setState({
          post: updated
        });
        swal({
          title: 'Video Uploaded',
          text: `${data.result.name}`,
          icon: 'success'
        });
      })
      .catch(err => {
        console.log(err);
      });
  }

  createPost(event) {
    let updated = Object.assign({}, this.state.post);
    event.preventDefault();
    const { title, text, address, city, state, zipCode } = this.state.post;
    if (title.length == 0) {
      swal({
        title: 'Oops...',
        text: 'Please include a Title',
        icon: 'error'
      });
      return;
    }
    if (text.length == 0) {
      swal({
        title: 'Oops...',
        text: 'Please include some text',
        icon: 'error'
      });
      return;
    }

    Geocode(address, city, state, zipCode)
      .then(response => {
        updated['coords'] = response;
        this.setState({
          post: updated
        });

        this.props.onCreate(this.state.post);
      })
      .catch(err => {
        console.log(err);
      });
  }

  render() {
    return (
      <div>
        <div className="form-group">
          <label htmlFor="title">Title</label>
          <input
            onChange={this.updatePost.bind(this, 'title')}
            className="form-control"
            id="title"
            type="text"
            placeholder="Title"
          />
        </div>
        <div className="form-group">
          <label htmlFor="text">Text</label>
          <input
            onChange={this.updatePost.bind(this, 'text')}
            className="form-control"
            id="text"
            type="text"
            placeholder="Text"
          />
        </div>
        <div className="row">
          <div className="form-group col-md-12">
            <label htmlFor="text">Address</label>
            <input
              onChange={this.updatePost.bind(this, 'address')}
              className="form-control"
              id="address"
              type="text"
              placeholder="Address"
            />
          </div>
        </div>
        <div className="row">
          <div className="form-group col-md-6">
            <label htmlFor="text">City</label>
            <input
              onChange={this.updatePost.bind(this, 'city')}
              className="form-control"
              id="city"
              type="text"
              placeholder="City"
            />
          </div>
          <div className="form-group col-md-6">
            <label htmlFor="text">State</label>
            <input
              onChange={this.updatePost.bind(this, 'state')}
              className="form-control"
              id="state"
              type="text"
              placeholder="State"
            />
          </div>
        </div>
        <div className="row">
          <div className="form-group col-md-6">
            <label htmlFor="text">Zip Code</label>
            <input
              onChange={this.updatePost.bind(this, 'zipCode')}
              className="form-control"
              id="zipCode"
              type="text"
              placeholder="Zip Code"
            />
          </div>
        </div>

        <div className="row">
          <div className="col-sm-6">
            <Dropzone className="btn btn-success" onDrop={this.imageUpload.bind(this)}>
              Upload Image
            </Dropzone>
          </div>
          <div className="col-sm-6">
            <Dropzone className="btn btn-warning" onDrop={this.videoUpload.bind(this)}>
              Upload Video
            </Dropzone>
          </div>
        </div>
        {this.state.post.image.length == 0 ? null : (
          <div className="row">
            <div className="col-sm-12">
              <img src={`${this.state.post.image}=s150`} style={{ paddingTop: '8px' }} />
            </div>
          </div>
        )}
        <div className="row">
          <div className="col-sm-6" style={{ paddingTop: '8px' }}>
            <button onClick={this.createPost.bind(this)} className="btn btn-primary">
              Submit
            </button>
          </div>
          {this.state.post.video == null ? null : (
            <div className="col-sm-6">
              <h3 style={{ color: 'red', border: '1px dashed red', borderRadius: '8px' }}>
                Video Uploaded
              </h3>
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default CreatePost;
