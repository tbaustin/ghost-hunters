import React, { Component } from 'react';

class UpdateReply extends Component {
  constructor() {
    super();
    this.state = {
      reply: {}
    };
  }

  updateReply(attr, event) {
    event.preventDefault();
    let updated = Object.assign({}, this.state.reply);
    updated[attr] = event.target.value;
    this.setState({
      reply: updated
    });
  }

  createUpdatedReply(event) {
    event.preventDefault();
    this.props.onCreate(this.state.reply);
  }

  render() {
    const { reply } = this.state;
    const { currentReply } = this.props;
    return (
      <div>
        <div className="row">
          <div className="row">
            <div className="form-group col-sm-10">
              <textarea
                onChange={this.updateReply.bind(this, 'text')}
                defaultValue={currentReply.text || 'Comment'}
                className="form-control"
                rows="2"
              />
            </div>
            <div className="col-sm-2">
              <button onClick={this.createUpdatedReply.bind(this)} className="btn btn-info btn-sm">
                Update
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default UpdateReply;
