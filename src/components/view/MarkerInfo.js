import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class MarkerInfo extends Component {
  render() {
    const { marker } = this.props;
    return (
      <div>
        <div className="card" style={{ width: '10rem' }}>
          <img className="card-img-top" src={marker.image} alt="Card image cap" />
          <div className="card-body">
            <h4 className="card-title">{marker.title}</h4>
            <p className="card-text">{marker.description}</p>
            <Link to={`/post/${marker.id}`} className="btn btn-primary">
              More
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default MarkerInfo;
