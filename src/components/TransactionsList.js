import React, { Component } from 'react';

import TransactionsSearchForm from './Transactions/TransactionsSearchForm';
import TransactionsTable from './Transactions/TransactionsTable';

import {
  Link
} from 'react-router-dom';

class TransactionsList extends Component {

  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      items: [],
  		filters:{
        // start_date: '',
    		// end_date: ''
      },
      sortBy: "purchased_at",
      sortDir: "desc"
    };

    this.handleSearchSubmit = this.handleSearchSubmit.bind(this);
    this.handleTableSort = this.handleTableSort.bind(this);
  }

  componentDidMount() {
    this.loadData( this.state.filters );
  }

  loadData(filters) {

    fetch("/data/transactions.json")
      .then(res => res.json())
      .then(
          (items) => {
              this.setState({
                  isLoaded: true,
                  items: items
              });

              console.log("Data loaded:", items);
          },
          // Note: it's important to handle errors here
          // instead of a catch() block so that we don't swallow
          // exceptions from actual bugs in components.
          (error) => {
              this.setState({
                  isLoaded: true,
                  error
              });
          }
      );
  }

  compareBy(key) {
      return function(a, b) {
          if (a[key] < b[key]) return -1;
          if (a[key] > b[key]) return 1;
          return 0;
      };
  }

  render() {

    const {
      items,
      error,
      isLoaded
    } = this.state;

    return (
      <div>
        <Link to="/transactions/create" className="button primary">Add</Link>
        <TransactionsSearchForm onSubmit={this.handleSearchSubmit} />
        <TransactionsTable items={items} error={error} isLoaded={isLoaded} onSort={this.handleTableSort} />
      </div>
    );
  }

  handleTableSort(event, key) {

      let arrayCopy = [...this.state.items];
      arrayCopy.sort(this.compareBy(key)); // asc

      // sort by. Reset direction if new sort column
      let dir = this.state.dir;
      if (key !== this.state.sortBy) {
          dir = "asc";
      } else { // toggle
          dir = (this.state.sortDir === "asc") ? "desc" : "asc";
      }

      // toggle dir, reverse on desc
      if (dir === "desc") {
          arrayCopy = arrayCopy.reverse();
      }

      this.setState({
          items: arrayCopy,
          sortBy: key,
          sortDir: dir
      });

  }

  handleSearchSubmit(event, filters) {
    this.setState({
      filters: filters
    });
    this.loadData( filters );
  }
}

export default TransactionsList;
