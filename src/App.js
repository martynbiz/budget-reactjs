// import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Transactions from './components/Transactions';

// import {
//   BrowserRouter as Router,
//   Route,
//   Link
// } from 'react-router-dom';
//
// class App extends Component {
//   render() {
//     return (
//       <TransactionsView />
//     );
//     // return (
//     //   <div className="App">
//     //     <header className="App-header">
//     //       <img src={logo} className="App-logo" alt="logo" />
//     //       <h1 className="App-title">Welcome to React</h1>
//     //     </header>
//     //     <p className="App-intro">
//     //       To get started, edit <code>src/App.js</code> and save to reload.
//     //     </p>
//     //   </div>
//     // );
//   }
// }
//
// export default App;


import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

const Home = () => (
  <div>
    <h2>Home</h2>
  </div>
)

const Categories = () => (
  <div>
    <h2>Categories</h2>
  </div>
)

const Tags = ({ match }) => (
  <div>
    <h3>Tags</h3>
  </div>
)

const Funds = () => (
  <div>
    <h2>Funds</h2>
  </div>
)

// const Topics = ({ match }) => (
//   <div>
//     <h2>Topics</h2>
//     <ul>
//       <li>
//         <Link to={`${match.url}/rendering`}>
//           Rendering with React
//         </Link>
//       </li>
//       <li>
//         <Link to={`${match.url}/components`}>
//           Components
//         </Link>
//       </li>
//       <li>
//         <Link to={`${match.url}/props-v-state`}>
//           Props v. State
//         </Link>
//       </li>
//     </ul>
//
//     <Route path={`${match.path}/:topicId`} component={Topic}/>
//     <Route exact path={match.path} render={() => (
//       <h3>Please select a topic.</h3>
//     )}/>
//   </div>
// )

const App = () => (
  <Router>
    <div>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/transactions">Transactions</Link></li>
        <li><Link to="/categories">Categories</Link></li>
        <li><Link to="/tags">Tags</Link></li>
        <li><Link to="/funds">Funds</Link></li>
      </ul>

      <hr/>

      <Route exact path="/" component={Home}/>
      <Route path="/transactions" component={Transactions}/>
      <Route path="/categories" component={Categories}/>
      <Route path="/tags" component={Tags}/>
      <Route path="/funds" component={Funds}/>
    </div>
  </Router>
)
export default App
