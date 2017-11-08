import React, { Component } from 'react';
import { connect } from 'react-redux';
import swal from 'sweetalert';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';

import { CreatePost } from '../view';
import { Account } from '../containers';
import actions from '../../actions';
import { DateUtils } from '../../utils';

class Posts extends Component {
  componentDidMount() {
    if (this.props.post.all == null) {
      this.props
        .fetchPosts({})
        .then(response => {
          return null;
        })
        .catch(err => {
          console.log(err);
        });
    }
    if (this.props.reply.all == null) {
      this.props
        .getReplies({})
        .then(() => {
          return null;
        })
        .catch(err => {
          console.log(err);
        });
    }
  }

  head() {
    return (
      <Helmet>
        <title>{`${this.props.post.all.length} Posts Loaded`}</title>
        <meta property="og:title" content="Ghosts App" />
      </Helmet>
    );
  }

  createPost(params) {
    const { currentUser } = this.props.user;
    if (currentUser == null) {
      swal({
        title: 'Oops...',
        text: 'Please Login or Register before posting',
        icon: 'error'
      });
      return;
    }

    const updated = Object.assign({}, params, { profile: currentUser });

    this.props
      .createPost(updated)
      .then(data => {
        swal({
          title: 'Post Created',
          text: `Title: ${data.title}`,
          icon: 'success'
        });
      })
      .catch(err => {
        console.log(err);
      });
  }

  render() {
    const posts = this.props.post.all;
    const { currentUser } = this.props.user;
    // console.log(currentUser);
    return (
      <div>
        {this.head()}
        <div className="row">
          <div className="col-sm-8">
            <div className="card-columns">
              {posts == null
                ? null
                : posts.map(post => {
                    return (
                      <div
                        key={post.id}
                        className="card text-white bg-dark mb-3"
                        style={{ maxWidth: '20rem' }}
                      >
                        <div className="card-header">
                          <Link to={`/post/${post.id}`}>
                            <img className="card-img-top" src={post.image} alt="Card image cap" />
                          </Link>
                        </div>
                        <div className="card-body text-white">
                          <h4 className="card-title" style={{ color: 'white' }}>
                            {post.title.length > 17 ? post.title.substr(0, 17) + '...' : post.title}
                          </h4>
                          <p className="card-text">
                            {post.text.length > 30 ? post.text.substr(0, 30) + '...' : post.text}
                          </p>
                          <span>
                            ~{' '}
                            <Link to={`/profile/${post.profile.id}`} style={{ color: 'white' }}>
                              <strong>{post.profile.username || 'Anonymous'}</strong>
                            </Link>
                          </span>
                        </div>
                        <div className="card-footer">
                          <small className="text-muted">
                            {DateUtils.relativeTime(post.timestamp)}
                          </small>
                        </div>
                      </div>
                    );
                  })}
            </div>
          </div>
          <div className="col-sm-4">
            <div className="row">
              <div className="col-sm-12">
                <Account />
              </div>
            </div>
            {currentUser == null ? null : (
              <div className="row" style={{ marginTop: '25px' }}>
                <div className="row">
                  <div className="col-sm-12">
                    <h3>Create a Post</h3>
                  </div>
                </div>
                <div className="row">
                  <div className="col-sm-12">
                    <CreatePost onCreate={this.createPost.bind(this)} />
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }
}

const stateToProps = state => {
  return {
    post: state.post,
    user: state.user,
    reply: state.reply
  };
};

const dispatchToProps = dispatch => {
  return {
    createPost: params => dispatch(actions.createPost(params)),
    fetchPosts: params => dispatch(actions.fetchPosts(params)),
    getReplies: params => dispatch(actions.getReplies(params))
  };
};

const loadData = store => {
  return store.dispatch(actions.fetchPosts());
};

export default {
  loadData: loadData,
  component: connect(stateToProps, dispatchToProps)(Posts)
};
