import React from 'react'

import Home from './components/Home'

import Transactions from './components/Transactions';
import TransactionsCreate from './components/TransactionsCreate';
import TransactionsEdit from './components/TransactionsEdit';

import Categories from './components/Categories';
import Tags from './components/Tags';
import Funds from './components/Funds';

import Login from './components/Login';
import Register from './components/Register';

import NotFound from './components/NotFound';

import PrivateRoute from './components/PrivateRoute';
import AuthButton from './components/AuthButton';

import TopBar from './components/TopBar';

import {
  BrowserRouter,
  Switch,
  Route
} from 'react-router-dom';

const App = () => (
  <BrowserRouter>
    <div>
      <TopBar/>
      <AuthButton />
      <div className="grid-container">
        <div className="grid-x">
          <div className="cell small-12">
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
          </div>
        </div>
      </div>
    </div>
  </BrowserRouter>
);

export default App
