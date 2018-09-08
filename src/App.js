import React, { Component } from 'react'

import Home from './components/Home'
import Transactions from './components/Transactions';
import Categories from './components/Categories';
import Tags from './components/Tags';
import Funds from './components/Funds';
import Login from './components/Login';
import Register from './components/Register';
import NotFound from './components/NotFound';
import PrivateRoute from './components/PrivateRoute';
import TopBar from './components/TopBar';

import {
  BrowserRouter,
  Switch,
  Route
} from 'react-router-dom';

import $ from 'jquery';
import 'foundation-sites';

export class App extends Component {

  // add foundation to the document (page) only after the other page
  // elements have been loaded.
  componentDidMount() {
      $(document).foundation();
  }

  render() {
    return (
      <BrowserRouter>
        <div>
          <TopBar/>
          <div className="grid-container">
            <div className="grid-x">
              <div className="cell small-12">
                <Switch>
                  <Route path="/" component={Home} exact/>
                  <PrivateRoute path="/transactions" component={Transactions}/>
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
  }
}

// const App = () => (
//   <BrowserRouter>
//     <div>
//       <TopBar/>
//       <AuthButton />
//       <div className="grid-container">
//         <div className="grid-x">
//           <div className="cell small-12">
//             <Switch>
//               <Route path="/" component={Home} exact/>
//               <PrivateRoute path="/transactions" component={Transactions}/>
//               <PrivateRoute path="/categories" component={Categories}/>
//               <PrivateRoute path="/tags" component={Tags}/>
//               <PrivateRoute path="/funds" component={Funds} />
//               <Route path="/login" component={Login} />
//               <Route path="/register" component={Register} />
//               <Route component={NotFound}/>
//             </Switch>
//           </div>
//         </div>
//       </div>
//     </div>
//   </BrowserRouter>
// );

export default App
