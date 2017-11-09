import React from 'react';
import { renderRoutes } from 'react-router-config';

import Header from './partials/Header';
import apiActions from '../actions/apiActions';

const App = ({ route }) => {
  return (
    <div className="container">
      <Header />
      {renderRoutes(route.routes)}
    </div>
  );
};

const loadData = store => {
  return store.dispatch(apiActions.apiCurrentUser());
};

export default {
  component: App,
  loadData: loadData
};
