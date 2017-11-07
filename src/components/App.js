import React from 'react';
import { renderRoutes } from 'react-router-config';

import Header from './partials/Header';
import actions from '../actions';

const App = ({ route }) => {
  return (
    <div className="container">
      <Header />
      {renderRoutes(route.routes)}
    </div>
  );
};

export default {
  component: App,
  loadData: ({ dispatch }) => dispatch(actions.currentUser())
};
