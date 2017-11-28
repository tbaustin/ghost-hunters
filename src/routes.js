import React from 'react';

import {
  Post,
  Posts,
  Profile,
  NotFound,
  UsersList,
  GhostMap,
  NotAuth,
  TestMap
} from './components/containers';
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
        ...NotAuth,
        path: '/noauth'
      },
      {
        component: TestMap,
        path: '/testmap'
      },
      {
        ...NotFound
      }
    ]
  }
];
