import React, { Component } from 'react';

import TransactionsSearchForm from './includes/TransactionsSearchForm';
import TransactionsTable from './includes/TransactionsTable';
import TransactionsApi from './api/Transactions';

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

    let successHandler = (items) => {
        this.setState({
            isLoaded: true,
            items: items
        });
    };
    successHandler = successHandler.bind(this);

    let errorHandler = (error) => {
        this.setState({
            isLoaded: true,
            error
        });
    };
    errorHandler = errorHandler.bind(this);

    TransactionsApi.fetchAll(
      successHandler,
      errorHandler
    );

  }

  compareBy(key) {
      return function(a, b) {
          if (a[key] < b[key]) return -1;
          if (a[key] > b[key]) return 1;
          return 0;
      };
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

    event.preventDefault();
  }

  render() {

    return (
      <div>
        <Link to="/transactions/create" className="button primary">Add</Link>
        <TransactionsSearchForm onSubmit={this.handleSearchSubmit} />
        <TransactionsTable {...this.state} onSort={this.handleTableSort} />
      </div>
    );
  }
}

export default TransactionsList;
