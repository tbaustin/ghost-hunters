import React, { Component } from 'react';
import swal from 'sweetalert2/dist/sweetalert2.all.min.js';
import Dropzone from 'react-dropzone';

import { TurboClient } from '../../utils';

class UpdateProfile extends Component {
  constructor() {
    super();
    this.state = {
      editShow: false,
      profile: {}
    };
  }

  updateProfile(attr, event) {
    event.preventDefault();
    let updated = Object.assign({}, this.state.profile);
    updated[attr] = event.target.value;
    this.setState({
      profile: updated
    });
  }

  imageUpload(attr, files) {
    let updated = Object.assign({}, this.state.profile);
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
          profile: updated
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

  createUpdatedProfile(event) {
    event.preventDefault();
    this.setState({
      editShow: false
    });
    this.props.onCreate(this.state.profile);
  }

  render() {
    const { profile } = this.state;
    const { currentProfile } = this.props;
    return (
      <div>
        <div className="row justify-content-center" style={{ marginBottom: '100px' }}>
          <div className="col-sm-6">
            <a href="#update_user">
              <button
                className="btn btn-warning btn-lg btn-block"
                onClick={() => {
                  this.setState({ editShow: !this.state.editShow });
                }}
              >
                Edit Profile
              </button>
            </a>
          </div>
        </div>
        {this.state.editShow == false ? null : (
          <div className="row justify-content-center">
            <div id="update_user">
              <div className="row">
                <div className="form-group col-md-6">
                  <label htmlFor="firstName">First Name</label>
                  <input
                    onChange={this.updateProfile.bind(this, 'firstName')}
                    type="text"
                    className="form-control"
                    id="firstName"
                    defaultValue={currentProfile.firstName || 'First Name'}
                  />
                </div>
                <div className="form-group col-md-6">
                  <label htmlFor="lastName">Last Name</label>
                  <input
                    onChange={this.updateProfile.bind(this, 'lastName')}
                    type="text"
                    className="form-control"
                    id="lastName"
                    defaultValue={currentProfile.lastName || 'Last Name'}
                  />
                </div>
              </div>
              <div className="row">
                <div className="form-group col-md-12">
                  <label htmlFor="email">Email address</label>
                  <input
                    onChange={this.updateProfile.bind(this, 'email')}
                    type="email"
                    className="form-control"
                    id="email"
                    aria-describedby="emailHelp"
                    defaultValue={currentProfile.Email || 'Email'}
                  />
                </div>
              </div>
              <div className="row">
                <div className="form-group col-sm-12">
                  <label htmlFor="bio">Biography</label>
                  <textarea
                    onChange={this.updateProfile.bind(this, 'bio')}
                    defaultValue={currentProfile.bio || 'Biography'}
                    className="form-control"
                    id="bio"
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
                  {profile.image != null ? (
                    <img src={`${profile.image}=s150`} />
                  ) : currentProfile.image != null ? (
                    <img src={`${currentProfile.iamge}=s150`} />
                  ) : null}
                </div>
              </div>
              <div className="row" style={{ marginTop: '15px' }}>
                <div className="form-group col-sm-4">
                  <Dropzone className="btn btn-info" onDrop={this.imageUpload.bind(this, 'bannerImage')}>
                    Upload Banner Image
                  </Dropzone>
                </div>
                <div className="col-sm-6 ml-auto">
                  {profile.bannerImage != null ? (
                    <img src={`${profile.bannerImage}=s200`} />
                  ) : currentProfile.bannerImage != null ? (
                    <img src={`${currentProfile.bannerImage}=s200`} />
                  ) : null}
                </div>
              </div>
              <hr className="my-4" />
              <button onClick={this.createUpdatedProfile.bind(this)} className="btn btn-success" style={{ marginBottom: '100px' }}>
                Update
              </button>
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default UpdateProfile;
