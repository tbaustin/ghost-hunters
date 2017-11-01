import React, { Component } from 'react';
import swal from 'sweetalert2/dist/sweetalert2.all.min.js';

class CreateReply extends Component {
  constructor() {
    super();
    this.state = {
      reply: {
        text: ''
      }
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

  createReply(event) {
    event.preventDefault();
    const { text } = this.state.reply;
    if (text.length == 0) {
      swal({
        title: 'Oops...',
        text: 'Please provide some text',
        type: 'error'
      });
      return;
    }
    this.props.onCreate(this.state.reply);
  }

  render() {
    return (
      <div className="row" style={{ border: '1px solid #e6e6e6', padding: '20px' }}>
        <div className="form-group col-sm-12">
          <textarea onChange={this.updateReply.bind(this, 'text')} className="form-control" rows="3" />
        </div>
        <div className="col-sm-12">
          <button onClick={this.createReply.bind(this)} className="btn btn-warning">
            Comment
          </button>
        </div>
      </div>
    );
  }
}

export default CreateReply;
