import React, { Component } from 'react';

import {
  Redirect
} from 'react-router-dom';

import Pagination from './Pagination';

/**
 * This is just the display for transaction table. It needs to be passed submit and change
 * handles in its props
 */
class TransactionsTable extends Component {

  constructor(props) {
    super(props);
    this.state = {
  		currentPage: 1
    };

    this.handleSort = this.handleSort.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handlePaginate = this.handlePaginate.bind(this);
  }

  handleSort(event, name) {
    this.props.onSort(event, name);
    event.preventDefault();
  }

  handleClick(event, id) {
    this.setState({
      redirectTo: {
        path: `/transactions/${id}`,
        flash_message: "Transaction has been updated"
      },
    });
    event.preventDefault();
  }

  handlePaginate(event, page) {
    this.setState({
      currentPage: page
    });
    event.preventDefault();
  }

  render() {

    // handle redirects
    if (this.state.redirectTo) {
      return <Redirect to={this.state.redirectTo.path} />
    }

    const {
      error,
      isLoaded,
      data
    } = this.props;

    if (error) {
      return <div> Error: {error.message} < /div>;
    } else if (!isLoaded) {
      return <div> Loading... </div>;
    } else {

      // these will be passed to the <Pagination/> component, but we need them
      // for the slice too so we declare them up here first
      // TODO pass this in as props
      const pagination = {
        totalItems: data.length,
        itemsPerPage: 10,
        currentPage: this.state.currentPage,
        onPaginate: this.handlePaginate
      }

      // for the slice
      const end = pagination.currentPage * pagination.itemsPerPage;
      const start = end - pagination.itemsPerPage;

      return (
        <div>
          <table>
            <thead>
              <tr>
                <th onClick={(e) => this.handleSort(e, 'description')} >Description</th>
                <th onClick={(e) => this.handleSort(e, 'amount')} >Amount</th>
                <th onClick={(e) => this.handleSort(e, 'category')} >Category</th>
                <th onClick={(e) => this.handleSort(e, 'purchased_at')} >Date</th>
              </tr>
            </thead>
            <tbody>
              {data.slice(start, end).map(transaction => (
                <tr key={transaction.id} onClick={(e) => this.handleClick(e, transaction.id)}>
                  <td>{transaction.description}</td>
                  <td>{transaction.amount}</td>
                  <td>{transaction.category.name}</td>
                  <td>{transaction.purchased_at}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <Pagination {...pagination}/>
        </div>
      );
    }
  }
}

export default TransactionsTable;
