import React from 'react'
import Home from './components/Home'
import Transactions from './components/Transactions';
import Categories from './components/Categories';
import Tags from './components/Tags';
import Funds from './components/Funds';
import NotFound from './components/NotFound';
import Navigation from './components/Navigation';

import {
  BrowserRouter,
  Switch,
  Route
} from 'react-router-dom';

const App = () => (
  <BrowserRouter>
    <div className="grid-container">
      <div className="grid-x">
        <div className="cell small-12 medium-2">
          <Navigation/>
        </div>
        <div className="cell small-12 medium-10">
          <Switch>
            <Route exact path="/" component={Home}/>
            <Route path="/transactions" component={Transactions}/>
            <Route path="/categories" component={Categories}/>
            <Route path="/tags" component={Tags}/>
            <Route path="/funds" component={Funds}/>
            <Route component={NotFound}/>
          </Switch>
        </div>
      </div>
    </div>
  </BrowserRouter>
);

export default App
