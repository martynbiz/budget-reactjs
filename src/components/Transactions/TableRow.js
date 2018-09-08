import React from 'react';

/**
 * This is just the display for transaction table. It needs to be passed submit and change
 * handles in its props
 */
const TransactionsTableRow = () => (
  <tr>
    <td>{this.props.description}</td>
    <td>{this.props.amount}</td>
    <td>{this.props.category}</td>
    <td>{this.props.purchased_at}</td>
  </tr>
);

export default TransactionsTableRow;
