import React, { Component } from 'react';

import { NavLink } from 'react-router-dom'

const Navigation = () => (
  <nav>
    <ul className="topnav">
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/transactions">Transactions</NavLink>
      </li>
      <li>
        <NavLink to="/categories">Categories</NavLink>
      </li>
      <li>
        <NavLink to="/tags">Tags</NavLink>
      </li>
      <li>
        <NavLink to="/funds">Funds</NavLink>
      </li>
    </ul>
  </nav>
);

export default Navigation;
