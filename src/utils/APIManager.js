import axios from 'axios';

export default {
  get: (url, params) => {
    return new Promise((resolve, reject) => {
      axios
        .get(url, { params })
        .then(response => {
          if (response.data.confirmation !== 'success') {
            throw new Error(response.data.message);
          }
          resolve(response.data);
        })
        .catch(err => {
          reject(err || err.message);
        });
    });
  },

  post: (url, params) => {
    return new Promise((resolve, reject) => {
      axios
        .post(url, params)
        .then(response => {
          if (response.data.confirmation !== 'success') {
            throw new Error(response.data.message);
          }
          resolve(response.data);
        })
        .catch(err => {
          reject(err || err.message);
        });
    });
  },

  put: (url, params) => {
    return new Promise((resolve, reject) => {
      axios
        .put(url, params)
        .then(response => {
          if (response.data.confirmation !== 'success') {
            throw new Error(response.data.message);
          }
          resolve(response.data);
        })
        .catch(err => {
          reject(err || err.message);
        });
    });
  },

  delete: url => {
    return new Promise((resolve, reject) => {
      axios
        .delete(url)
        .then(response => {
          if (response.data.confirmation !== 'success') {
            throw new Error(response.data.message);
          }
          resolve(response.data);
        })
        .catch(err => {
          reject(err || err.message);
        });
    });
  }
};
