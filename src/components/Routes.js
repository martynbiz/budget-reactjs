import React from 'react';

import Home from './Home'
import Transactions from './Transactions';
import TransactionsCreate from './TransactionsCreate';
import TransactionsEdit from './TransactionsEdit';
import Categories from './Categories';
import Tags from './Tags';
import Funds from './Funds';
import Login from './Login';
import Register from './Register';
import NotFound from './NotFound';
import PrivateRoute from './PrivateRoute';

import {
  Switch,
  Route
} from 'react-router-dom';

const Routes = () => (
  <Switch>
    <Route path="/" component={Home} exact/>
    <PrivateRoute path="/transactions" component={Transactions} exact/>
    <PrivateRoute path="/transactions/:id([0-9]*)" component={TransactionsEdit}/>
    <PrivateRoute path="/transactions/create" component={TransactionsCreate}/>
    <PrivateRoute path="/categories" component={Categories}/>
    <PrivateRoute path="/tags" component={Tags}/>
    <PrivateRoute path="/funds" component={Funds} />
    <Route path="/login" component={Login} />
    <Route path="/register" component={Register} />
    <Route component={NotFound}/>
  </Switch>
);

export default Routes
