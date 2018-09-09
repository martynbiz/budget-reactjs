import React from 'react';

import {
  withRouter
} from 'react-router-dom';

import Auth from '../api/Auth';

const LogoutLink = withRouter(
  ({ history=[] }) =>
    <a onClick={() => {
      if (window.confirm("Are you sure you want to logout?")) {
        Auth.logout(() => history.push("/"));
      }
    }}>Logout</a>
);

export default LogoutLink;
