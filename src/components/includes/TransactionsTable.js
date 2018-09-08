import React, { Component } from 'react';

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
                        <tr key={item.id}>
                          <td>{item.description}</td>
                          <td>{item.amount}</td>
                          <td>{item.category}</td>
                          <td>{item.purchased_at}</td>
                        </tr>
                      ))}
                  </tbody>
              </table>
          );
      }
  }
}

export default TransactionsTable;
