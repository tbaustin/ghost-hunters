import React from 'react';
import { render } from 'react-dom';
import { Route, Switch } from 'react-router-dom';

import { Post, Posts, Profile, NotFound } from './components/containers';
import App from './components/App';

export default [
  {
    ...App,
    routes: [
      {
        ...Posts,
        path: '/',
        exact: true
      },
      {
        ...Post,
        path: '/post/:id'
      },
      {
        ...Profile,
        path: '/profile/:id'
      },
      {
        ...NotFound
      }
    ]
  }
];
