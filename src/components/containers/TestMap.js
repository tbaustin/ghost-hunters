import React, { Component } from 'react';
import { connect } from 'react-redux';

import { Map } from '../view';

class TestMap extends Component {
  constructor(props) {
    super(props);

    this.state = {
      map: null
    };
  }

  render() {
    return (
      <div className="container" style={{ height: '600px' }}>
        <Map
          onMapReady={map => {
            if (this.state.map != null) return;

            this.setState({
              map: map
            });
          }}
          markers={[]}
          zoom={13}
          center={{ lat: 40.7224017, lng: -73.9896719 }}
          containerElement={<div style={{ height: 100 + '%' }} />}
          mapElement={<div style={{ height: 100 + '%' }} />}
        />
      </div>
    );
  }
}

export default TestMap;
