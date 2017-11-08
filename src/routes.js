import React from 'react';

import { Post, Posts, Profile, NotFound, UsersList, GhostMap } from './components/containers';
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
        ...UsersList,
        path: '/users'
      },
      {
        ...GhostMap,
        path: '/map'
      },
      {
        ...NotFound
      }
    ]
  }
];
