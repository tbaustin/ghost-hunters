require('babel-core/register')({
  presets: ['env', 'react', 'stage-0', 'stage-1']
});
import { matchRoutes } from 'react-router-config';

import routes from './src/routes';
import createStore from './src/stores';
import renderer from './helpers/renderer';
const pkg_json = require('./package.json');
const vertex = require('vertex360')({ site_id: pkg_json.app });

// initialize app
const app = vertex.app();

// import routes
const index = require('./routes/index');
const api = require('./routes/api');

// set routes
app.use('/', index);
app.use('/api', api); // sample API Routes

app.get('*', (req, res) => {
  const store = createStore(); // create Store in order to get data from redux

  const promises = matchRoutes(routes, req.path)
    .map(({ route }) => {
      // Matches the route and loads data if loadData function is there
      return route.loadData ? route.loadData(store) : null;
    })
    .map(promise => {
      if (promise) {
        return new Promise((resolve, reject) => {
          promise.then(resolve).catch(resolve); // lets all data to be loaded even if something fails
        });
      }
    });

  Promise.all(promises).then(() => {
    const context = {};
    if (context.url) {
      return res.redirect(301, context.url); // redirect for non auth users
    }

    if (context.notFound) {
      res.status(404); // set status to 404 for unknown route
    }
    renderer(res, req, store, context);
  });
});

module.exports = app;
