import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { renderRoutes } from 'react-router-config';
import serialize from 'serialize-javascript';
import { Helmet } from 'react-helmet';
import { matchRoutes } from 'react-router-config';

const pkg_json = require('./package.json');
const turbo = require('turbo360')({ site_id: pkg_json.app });
import createStore from './src/stores';
import routes from './src/routes';

function ssrRequest(req, res, resource) {
  turbo
    .fetch(resource, null)
    .then(data => {
      let initial = {};
      initial[resource] = { all: data };
      const store = createStore.configure(initial);
      const context = {};

      if (context.url) {
        return res.redirect(301, context.url); // redirect for non auth users
      }

      if (context.notFound) {
        res.status(404); // set status to 404 for unknown route
      }
      console.log(store.getState());
      const content = renderToString(
        <Provider store={store}>
          <StaticRouter location={req.url} context={context}>
            {renderRoutes(routes)}
          </StaticRouter>
        </Provider>
      );

      const helmet = Helmet.renderStatic();
      const initialState = serialize(store.getState());

      res.render('index', { content, initialState, helmet });
    })
    .catch(err => {
      res.json({
        confirmation: 'fail',
        message: err.message
      });
    });
}

module.exports = ssrRequest;
