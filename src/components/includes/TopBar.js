import React from 'react';

import {
  NavLink,
  Link
} from 'react-router-dom';

import Auth from '../api/Auth';

import LogoutLink from '../includes/LogoutLink';

const TopBar = () => (
  <div className="top-bar">
    <div className="top-bar-left">
      <ul className="dropdown menu" data-dropdown-menu>
        <li className="menu-text"><Link to="/">Budget</Link></li>
      </ul>
    </div>
    <div className="top-bar-right show-for-medium">
      {Auth.isAuthenticated ? (
        <ul className="dropdown menu" data-dropdown-menu>
          <li><NavLink to="/transactions">Transactions</NavLink></li>
          <li><NavLink to="/categories">Categories</NavLink></li>
          <li><NavLink to="/tags">Tags</NavLink></li>
          <li><NavLink to="/funds">Funds</NavLink></li>
          <li><LogoutLink/></li>
        </ul>
      ) : (
        <ul className="dropdown menu" data-dropdown-menu>
          <li><NavLink to="/register">Register</NavLink></li>
          <li><NavLink to="/login">Login</NavLink></li>
        </ul>
      )}
    </div>
  </div>
);

export default TopBar;
