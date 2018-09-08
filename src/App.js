import React from 'react'
import Home from './components/Home'
import Transactions from './components/Transactions'
import TransactionsAdd from './components/TransactionsAdd'
import Categories from './components/Categories'
import Tags from './components/Tags'
import Funds from './components/Funds'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

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

      <Route path="/transactions/create" component={TransactionsAdd}/>
      <Route path="/transactions" component={Transactions}/>

      <Route path="/categories" component={Categories}/>
      <Route path="/tags" component={Tags}/>
      <Route path="/funds" component={Funds}/>
    </div>
  </Router>
)
export default App
