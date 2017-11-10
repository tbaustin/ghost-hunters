import axios from 'axios';

import config from '../config';

export default (streetAddress, city, state, zipCode) => {
  return new Promise((resolve, reject) => {
    axios
      .get(
        `https://maps.googleapis.com/maps/api/geocode/json?address=${streetAddress.replace(
          / /g,
          '+'
        )},${city}+${state}+${zipCode}&key=${config.GOOGLE_API_KEY}`
      )
      .then(response => {
        resolve(response.data.results[0].geometry.location);
      })
      .catch(err => {
        reject(err);
      });
  });
};
