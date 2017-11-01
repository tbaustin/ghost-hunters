import React, { Component } from 'react';
import { connect } from 'react-redux';
import swal from 'sweetalert';
import { Link } from 'react-router-dom';

import { CreateReply, UpdateReply } from '../view';
import actions from '../../actions';
import { DateUtils } from '../../utils';

class Reply extends Component {
  constructor() {
    super();
    this.state = {
      editShow: false
    };
  }

  componentDidMount() {
    if (this.props.reply[this.props.postId] != null) {
      return;
    }
    this.props
      .getReplies({ postId: this.props.postId })
      .then(() => {})
      .catch(err => {
        console.log(err);
      });
  }

  createReply(params) {
    const { currentUser } = this.props.user;
    if (currentUser == null) {
      swal({
        title: 'Oops...',
        text: 'Please Login or Register',
        type: 'error'
      });
      return;
    }

    params['user'] = {
      username: currentUser.username,
      id: currentUser.id
    };
    params['postId'] = this.props.postId;

    this.props
      .createReply(params)
      .then(() => {})
      .catch(err => {
        console.log(err);
      });
  }

  updateReply(reply, params) {
    const { currentUser } = this.props.user;
    if (currentUser == null) {
      swal({
        title: 'Oops...',
        text: 'Please Login or Register',
        type: 'error'
      });
      return;
    }

    this.props
      .updateReply(reply, params)
      .then(() => {
        this.setState({
          editShow: false
        });
      })
      .catch(err => {
        console.log(err);
      });
  }

  deleteReply(reply) {
    const { currentUser } = this.props.user;
    if (currentUser == null) {
      swal({
        title: 'Oops...',
        text: 'Please Login or Register',
        type: 'error'
      });
      return;
    }

    this.props
      .deleteReply(reply)
      .then(() => {})
      .catch(err => {
        console.log(err);
      });
  }

  render() {
    const replies = this.props.reply[this.props.postId];
    const { currentUser } = this.props.user;
    return (
      <div>
        <div className="row">
          <div className="col-sm-12">
            <ul className="list-group">
              {replies == null ? (
                <div>No Replies</div>
              ) : (
                replies.map(reply => {
                  return (
                    <li key={reply.id} className="list-group-item list-group-item-secondary">
                      <div className="row">
                        {this.state.editShow === false ? (
                          <div className="col-auto mr-auto">
                            {reply.text}
                            <br />
                            ~ <Link to={`profile/${reply.user.id}`}>{reply.user.username}</Link>
                          </div>
                        ) : (
                          <div className="col-auto mr-auto" style={{ marginLeft: '10px' }}>
                            <UpdateReply
                              onCreate={this.updateReply.bind(this, reply)}
                              currentReply={reply}
                            />
                          </div>
                        )}

                        {currentUser == null
                          ? null
                          : currentUser.id !== reply.user.id
                            ? null
                            : [
                                <div key="1" className="col-auto">
                                  <button
                                    onClick={() => {
                                      this.setState({ editShow: !this.state.editShow });
                                    }}
                                    className="btn btn-success btn-sm"
                                  >
                                    Edit
                                  </button>
                                </div>,
                                <div key="2" className="col-auto">
                                  <button
                                    onClick={this.deleteReply.bind(this, reply)}
                                    className="btn btn-danger btn-sm"
                                  >
                                    Delete
                                  </button>
                                </div>
                              ]}

                        <div className="col-auto text-muted">
                          {DateUtils.relativeTime(reply.timestamp)}
                        </div>
                      </div>
                    </li>
                  );
                })
              )}
            </ul>
          </div>
        </div>
        <CreateReply onCreate={this.createReply.bind(this)} />
      </div>
    );
  }
}

const stateToProps = state => {
  return {
    user: state.user,
    reply: state.reply
  };
};

const dispatchToProps = dispatch => {
  return {
    createReply: params => dispatch(actions.createReply(params)),
    getReplies: params => dispatch(actions.getReplies(params)),
    deleteReply: entity => dispatch(actions.deleteReply(entity)),
    updateReply: (entity, params) => dispatch(actions.updateReply(entity, params))
  };
};

const loadData = store => {
  return store.dispatch(actions.getReplies());
};

export default {
  loadData: loadData,
  component: connect(stateToProps, dispatchToProps)(Reply)
};
