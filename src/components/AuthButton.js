import React from 'react';

import Auth from './fakeAuth';

import {
  withRouter
} from 'react-router-dom';

const AuthButton = withRouter(
  ({ history }) =>
    <a onClick={() => {
      if (window.confirm("Are you sure you want to logout?")) {
        Auth.signout(() => history.push("/"));
      }
    }}>Logout</a>
);

export default AuthButton;
