import React from 'react';
import { compose, withProps } from 'recompose';
import { withScriptjs, withGoogleMap, GoogleMap, Marker, InfoWindow } from 'react-google-maps';

import config from '../config';
import { MarkerInfo } from '../components/view';

export const MapComponent = compose(
  withProps({
    googleMapURL: `https://maps.googleapis.com/maps/api/js?key=${config.GOOGLE_API_KEY}&v=3.exp&libraries=geometry,drawing,places`,
    loadingElement: <div style={{ height: `100%` }} />,
    containerElement: <div style={{ height: `500px` }} />,
    mapElement: <div style={{ height: `100%` }} />
  }),
  withScriptjs,
  withGoogleMap
)(props => (
  <GoogleMap defaultZoom={8} center={props.center}>
    {props.isMarkerShown &&
      props.center && (
        <Marker position={props.center} title={"User's Location"} onClick={props.onHomeMarkerClick}>
          <InfoWindow>
            <div>User's Location</div>
          </InfoWindow>
        </Marker>
      )}

    {props.markers.map((marker, i) => {
      const onClick = () => props.onMarkerClick(marker);
      const onCloseClick = () => props.onCloseClick(marker);

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
  </GoogleMap>
));
