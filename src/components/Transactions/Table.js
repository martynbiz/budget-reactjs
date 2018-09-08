import React, { Component } from 'react';
import TransactionsTableRow from './TableRow';

/**
 * This is just the display for transaction table. It needs to be passed submit and change
 * handles in its props
 */
class TransactionsTable extends Component {

  constructor(props) {
    super(props);
    this.state = {
  		// start_date: '',
  		// end_date: ''
    };

    this.handleSort = this.handleSort.bind(this);
  }

  handleSort(event, name) {
    console.log(this.props);
    this.props.onSort(event, name);
    event.preventDefault();
  }

  render() {
      const {
          error,
          isLoaded,
          items
      } = this.props;
      if (error) {
          return <div> Error: {error.message} < /div>;
      } else if (!isLoaded) {
          return <div> Loading... </div>;
      } else {
          return (
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
                      {items.map(item => (
                        <TransactionsTableRow key={item.id} item={item} />
                      ))}
                  </tbody>
              </table>
          );
      }
  }
}

export default TransactionsTable;
