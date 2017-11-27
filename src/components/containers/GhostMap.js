import React, { Component } from 'react';
import { connect } from 'react-redux';
import geolib from 'geolib';
import { geolocated } from 'react-geolocated';
import axios from 'axios';

import actions from '../../actions';
import { Geocode } from '../../utils';
import { requireAuth } from '../HOC';
import { Map } from '../view';

class GhostMap extends Component {
  constructor(props) {
    super(props);

    this.state = {
      map: null,
      currentLocation: null,
      radius: 100,
      markers: []
    };

    this.handleMarkerClick = this.handleMarkerClick.bind(this);
    this.handleCloseClick = this.handleCloseClick.bind(this);
    this.createMarkersWithinRadius = this.createMarkersWithinRadius.bind(this);
    this.updateRadius = this.updateRadius.bind(this);
  }

  componentDidMount() {
    if (this.props.posts.all) {
      return;
    }
    this.props
      .fetchPosts()
      .then(data => {
        return data;
      })
      .catch(err => {
        console.log(err);
      });
  }

  componentWillReceiveProps(props) {
    if (props.coords) {
      this.setState({
        currentLocation: {
          lat: props.coords.latitude,
          lng: props.coords.longitude
        }
      });

      this.createMarkersWithinRadius(
        props.posts.all,
        this.state.radius,
        props.coords.latitude,
        props.coords.longitude
      )
        .then(data => {
          this.setState({
            markers: data
          });
          return data;
        })
        .catch(err => {
          console.log(err);
        });
    } else {
      axios
        .get('http://ip-api.com/json')
        .then(response => {
          this.setState({
            currentLocation: {
              lat: response.data.lat,
              lng: response.data.lon
            }
          });
          return this.createMarkersWithinRadius(
            props.posts.all,
            this.state.radius,
            response.data.lat,
            response.data.lon
          );
        })
        .then(data => {
          this.setState({
            markers: data
          });
        })
        .catch(err => {
          console.log(err);
        });
    }
  }

  createMarkersWithinRadius(posts, radius, lat, lng) {
    return new Promise((resolve, reject) => {
      const markers = [];
      const currentLocation = {
        latitude: lat,
        longitude: lng
      };

      posts.map(post => {
        let postGeolocation = {};

        Geocode(post.address, post.city, post.state, post.zipCode)
          .then(response => {
            postGeolocation.lat = response.lat;
            postGeolocation.lng = response.lng;
            const distanceArr = geolib.orderByDistance(currentLocation, [postGeolocation]);
            const miles = (distanceArr[0].distance / 1609.34).toFixed(2);

            if (miles <= radius) {
              markers.push({
                id: post.id,
                position: postGeolocation,
                title: post.title,
                description: post.text,
                image: post.image,
                showInfo: false
              });
            }
            resolve(markers);
          })
          .catch(err => {
            reject(err);
          });
      });
    });
  }

  handleMarkerClick(targetMarker) {
    this.setState({
      markers: this.state.markers.map(
        marker =>
          marker.id === targetMarker.id ? { ...marker, showInfo: !marker.showInfo } : marker
      )
    });
  }

  handleCloseClick(targetMarker) {
    this.setState({
      markers: this.state.markers.map(marker => {
        if (marker._id === targetMarker._id) {
          return {
            ...marker,
            showInfo: false
          };
        }
        return marker;
      })
    });
  }

  updateRadius(event) {
    const radius = event.target.value;
    const posts = this.props.posts.all;
    const { lat, lng } = this.state.currentLocation;
    if (typeof radius !== 'number') {
      alert('Please put in a number');
      return;
    }
    if (this.props.posts.all && this.state.currentLocation) {
      this.createMarkersWithinRadius(this.props.posts.all, radius, lat, lng);
    }
  }

  render() {
    const { markers } = this.state;

    return (
      <div className="row">
        <div className="col-sm-4">
          <div className="form-group">
            <label htmlFor="text">Radius</label>
            <input
              onChange={this.updateRadius}
              className="form-control"
              id="radius"
              type="Number"
              placeholder="Radius"
            />
          </div>
        </div>
        <div className="col-sm-12" style={{ height: '600px' }}>
          <Map
            onMapReady={map => {
              if (this.state.map != null) return;

              this.setState({
                map: map
              });
            }}
            onMarkerClick={this.handleMarkerClick}
            isMarkerShown={this.state.isMarkerShown}
            center={this.state.currentLocation}
            markers={markers}
            zoom={10}
            onCloseClick={this.handleCloseClick}
            containerElement={<div style={{ height: 100 + '%' }} />}
            mapElement={<div style={{ height: 100 + '%' }} />}
          />
        </div>
      </div>
    );
  }
}

const stateToProps = state => {
  return {
    posts: state.post
  };
};

const dispatchToProps = dispatch => {
  return {
    fetchPosts: () => dispatch(actions.fetchPosts())
  };
};

const loadData = store => {
  return store.dispatch(actions.fetchPosts());
};

export default {
  loadData: loadData,
  component: connect(stateToProps, dispatchToProps)(
    geolocated({
      positionOptions: {
        enableHighAccuracy: false
      },
      userDecisionTimeout: 5000
    })(requireAuth(GhostMap))
  )
};
