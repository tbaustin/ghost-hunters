import React, { Component } from 'react';
import { withGoogleMap, GoogleMap, Marker, InfoWindow } from 'react-google-maps';

import { MarkerInfo } from '../view';

class Map extends Component {
  constructor() {
    super();
    this.state = {
      map: null
    };
  }

  mapMoved() {
    // console.log('mapMoved: '+JSON.stringify(this.state.map.getCenter()))
    if (this.props.locationChanged != null) this.props.locationChanged(this.state.map.getCenter());
  }

  zoomChanged() {
    // console.log('zoomChanged: '+this.state.map.getZoom())
  }

  mapLoaded(map) {
    if (this.state.map != null) return;

    this.props.onMapReady(map);
    this.setState({
      map: map
    });
  }

  handleMarkerClick(marker) {
    if (this.props.markerClicked != null) this.props.markerClicked(marker, this.state.map);
  }

  render() {
    const markers = this.props.markers || [];

    return (
      <GoogleMap
        ref={this.mapLoaded.bind(this)}
        onDragEnd={this.mapMoved.bind(this)}
        onZoomChanged={this.zoomChanged.bind(this)}
        defaultZoom={this.props.zoom}
        defaultCenter={this.props.center}
      >
        {markers.map((marker, i) => {
          const onClick = () => this.props.onMarkerClick(marker);
          const onCloseClick = () => this.props.onCloseClick(marker);

          return (
            <Marker key={i} position={marker.position} title={marker.title} onClick={onClick}>
              {marker.showInfo && (
                <InfoWindow onCloseClick={onCloseClick}>
                  <div>
                    <MarkerInfo marker={marker} />
                  </div>
                </InfoWindow>
              )}
            </Marker>
          );
        })}
        {/* {markers.map((marker, index) => (
          <Marker
            key={index}
            clickable={true}
            icon={marker.icon}
            label={marker.label}
            title={marker.key}
            onClick={this.handleMarkerClick.bind(this, marker)}
            {...marker}
          />
        ))} */}
      </GoogleMap>
    );
  }
}

export default withGoogleMap(Map);
