import React, { Component } from 'react';

class TransactionsEdit extends Component {
  render() {
    return (
      <div>
        <h1>Transaction #{this.props.match.params.id}</h1>
      </div>
    );
  }
}

export default TransactionsEdit;
