import React from 'react';

import {
  Route
} from 'react-router-dom';

import TransactionsList from './TransactionsList';
import TransactionsCreate from './TransactionsCreate';
import TransactionsEdit from './TransactionsEdit';

const Transactions = (props) => (
  <div>
    <Route path={`${props.match.url}/`} component={TransactionsList} exact/>
    <Route path={`${props.match.url}/:id([0-9]*)`} component={TransactionsEdit}/>
    <Route path={`${props.match.url}/create`} component={TransactionsCreate}/>
  </div>
);

export default Transactions;
