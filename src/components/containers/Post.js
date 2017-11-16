import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import swal from 'sweetalert';

import actions from '../../actions';
import { DateUtils } from '../../utils';
import { Reply } from '../containers';
import { UpdateRecord } from '../view';

class Post extends Component {
  constructor() {
    super();
    this.state = {
      editShow: false
    };
  }

  componentDidMount() {
    const { id } = this.props.match.params;
    if (this.props.posts[id] != null) {
      return;
    }
    this.props
      .getRecord(id)
      .then(record => {})
      .catch(err => {
        console.log(err);
      });
  }

  updateRecord(params) {
    const { id } = this.props.match.params;
    const post = this.props.posts[id];
    const { currentUser } = this.props.user;
    if (post.profile.id !== currentUser.id) {
      swal({
        title: 'Oops...',
        text: 'Must be owner of post',
        icon: 'error'
      });
      return;
    }

    this.props
      .updateRecord(post, params)
      .then(response => {
        swal({
          title: 'Success',
          text: `${currentUser.username} Your post has been updated!`,
          icon: 'success'
        });
      })
      .catch(err => {
        console.log(err);
      });
  }

  deleteRecord() {
    const { id } = this.props.match.params;
    const post = this.props.posts[id];
    const { currentUser } = this.props.user;

    if (currentUser.id !== post.profile.id) {
      swal({
        title: 'Oops...',
        text: 'Must be owner of post',
        icon: 'error'
      });
      return;
    }

    this.props
      .deleteRecord(post)
      .then(() => {
        this.props.history.push('/');

        swal({
          title: 'Post Delete',
          text: 'Please create a new post',
          icon: 'success'
        });
      })
      .catch(err => {
        console.log(err);
      });
  }

  render() {
    const { id } = this.props.match.params;
    const post = this.props.posts[id];
    console.log(post);

    const { currentUser } = this.props.user;
    if (post == null) {
      return <div />;
    }

    return (
      <div>
        <div className="jumbotron">
          <h1 className="display-3">{post.title}</h1>
          <div className="row" style={{ marginBottom: '25px' }}>
            <img
              className="img-fluid mx-auto"
              src={`${post.image}`}
              style={{ maxHeight: '400px' }}
            />
          </div>
          <p className="lead">{post.text}</p>
          <hr className="my-4" />
          {post.video == undefined ? null : (
            <div className="row justify-content-center">
              <div className="col-8">
                <div className="lead" style={{ marginBottom: '25px' }}>
                  <div className="embed-responsive embed-responsive-16by9">
                    <video style={{ background: 'black' }} width="800" controls loop tabIndex="0">
                      <source src={post.video} type={post.videoType} />
                      Your browser does not support HTML5 video.
                    </video>
                  </div>
                </div>
              </div>
            </div>
          )}
          <div className="lead">
            <Link to={`/profile/${post.profile.id}`}>
              <button className="btn btn-secondary btn-lg">{post.profile.username}</button>
            </Link>
            <p style={{ marginTop: '10px' }}>{DateUtils.relativeTime(post.timestamp)}</p>
          </div>
          {currentUser == null ? null : currentUser.id !== post.profile.id ? null : (
            <div className="row justify-content-end">
              <div className="col-md-2">
                <button
                  onClick={() => {
                    this.setState({ editShow: !this.state.editShow });
                  }}
                  className="btn btn-success"
                >
                  Edit
                </button>
              </div>
              <div className="col-md-2">
                <button onClick={this.deleteRecord.bind(this)} className="btn btn-danger">
                  Delete
                </button>
              </div>
            </div>
          )}
        </div>
        {this.state.editShow === false ? null : (
          <div>
            <UpdateRecord onCreate={this.updateRecord.bind(this)} currentRecord={post} />
          </div>
        )}
        <div>
          <Reply postId={post.id} />
        </div>
      </div>
    );
  }
}

const stateToProps = state => {
  return {
    posts: state.post,
    user: state.user
  };
};

const dispatchToProps = dispatch => {
  return {
    getRecord: id => dispatch(actions.getRecord(id)),
    updateRecord: (entity, params) => dispatch(actions.updateRecord(entity, params)),
    deleteRecord: entity => dispatch(actions.deleteRecord(entity))
  };
};

const loadDataWithMatch = (store, match) => {
  return store.dispatch(actions.getRecord(match.params.id));
};

export default {
  // loadDataWithMatch: loadDataWithMatch,
  component: connect(stateToProps, dispatchToProps)(Post)
};
