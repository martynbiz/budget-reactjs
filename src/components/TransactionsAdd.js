import React, { Component } from 'react';
import Layout from './Layout';

class TransactionsAdd extends Component {

  constructor(props) {
    super(props);
    this.state = {

    };

    // this.handleSearchSubmit = this.handleSearchSubmit.bind(this);
    // this.handleTableSort = this.handleTableSort.bind(this);
  }

  render() {

    return (
      <Layout>
        <nav aria-label="You are here:" role="navigation">
          <ul className="breadcrumbs">
            <li><a href="#">Home</a></li>
            <li><a href="#">Transactions</li>
            <li>
              <span className="show-for-sr">Current: </span> Add
            </li>
          </ul>
        </nav>
      </Layout>
    );
  }
}

export default TransactionsAdd;
