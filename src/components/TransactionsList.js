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
      sortBy: "purchased_at",
      sortDir: "desc",
      limit: 1000,
      query: {
        month: "2018-09"
      }
    };

    this.handleFilterChange = this.handleFilterChange.bind(this);
    this.handleTableSort = this.handleTableSort.bind(this);
  }

  componentDidMount() {
    this.loadData( this.state.query );
  }

  loadData(query={}) {

    // set current fund
    query["fund"] = 1;

    // set limit
    query["limit"] = 1000;

    TransactionsApi.fetchAll(
      query,
      (data) => {
        this.setState({
          isLoaded: true,
          data: data,
          query: query
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

  handleTableSort(event, key) {

    let arrayCopy = [...this.state.data];

    const compareBy = (a, b) => {
      if (a[key] < b[key]) return -1;
      if (a[key] > b[key]) return 1;
      return 0;
    };

    arrayCopy.sort(compareBy); // asc

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

  // handleSearchSubmit(event, query) {
  //
  //   this.setState({
  //     query: query
  //   });
  //   this.loadData( query );
  //
  //   event.preventDefault();
  // }

  handleFilterChange(event, query) {
    this.loadData(query);
  }

  render() {

    console.log("render", this.state.query);

    return (
      <div className="grid-x grid-padding-x padding-y">
        <div className="small-12 cell">
          <ShowErrors errors={this.state.errors}/>
          <Link to="/transactions/create" className="button primary">Add</Link>
          <TransactionsFilters {...this.state.query} onChange={this.handleFilterChange} />
          {
            // <TransactionsSearchForm onSubmit={this.handleSearchSubmit} />
          }
          <TransactionsTable {...this.state} onSort={this.handleTableSort} />
        </div>
      </div>
    );
  }
}

export default TransactionsList;
