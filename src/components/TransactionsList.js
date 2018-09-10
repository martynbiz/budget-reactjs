import React, { Component } from 'react';

// import TransactionsSearchForm from './includes/TransactionsSearchForm';
import TransactionsTable from './includes/TransactionsTable';
import TransactionsFilters from './includes/TransactionsFilters';
import TransactionsApi from './api/Transactions';
import ShowErrors from './includes/ShowErrors';

import {
  Link
} from 'react-router-dom';

class TransactionsList extends Component {

  constructor(props) {
    super(props);
    this.state = {
      errors: [],
      isLoaded: false,
      data: [],
  		// filters:{
      //   // start_date: '',
    	// 	// end_date: ''
      // },
      sortBy: "purchased_at",
      sortDir: "desc"
    };

    // this.handleSearchSubmit = this.handleSearchSubmit.bind(this);
    this.handleFilterChange = this.handleFilterChange.bind(this);
    this.handleTableSort = this.handleTableSort.bind(this);
  }

  componentDidMount() {
    this.loadData( this.state.filters );
  }

  loadData(filters={}) {

    // get current fund
    filters["fund"] = 1;

    TransactionsApi.fetchAll(
      filters,
      (data) => {
        this.setState({
          isLoaded: true,
          data: data
        });
      },
      (data) => {
        this.setState({
          isLoaded: true,
          errors: data.errors
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

  handleTableSort(event, key) {

    let arrayCopy = [...this.state.data];
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
        data: arrayCopy,
        sortBy: key,
        sortDir: dir
    });

  }

  // handleSearchSubmit(event, filters) {
  //
  //   this.setState({
  //     filters: filters
  //   });
  //   this.loadData( filters );
  //
  //   event.preventDefault();
  // }

  handleFilterChange(event, filters) {
    this.loadData(filters);
  }

  render() {
    return (
      <div>
        <ShowErrors errors={this.state.errors}/>
        <Link to="/transactions/create" className="button primary">Add</Link>
        <TransactionsFilters onChange={this.handleFilterChange} />
        {
          // <TransactionsSearchForm onSubmit={this.handleSearchSubmit} />
        }
        <TransactionsTable {...this.state} onSort={this.handleTableSort} />
      </div>
    );
  }
}

export default TransactionsList;
