import React, { Component } from 'react';

/**
 * This is just the display for transaction table. It needs to be passed submit and change
 * handles in its props
 */
 class TransactionsTableRow extends Component {

   render() {
     const item = this.props.item;

     return (
       <tr>
         <td>{item.description}</td>
         <td>{item.amount}</td>
         <td>{item.category}</td>
         <td>{item.purchased_at}</td>
       </tr>
     );
   }
 }

export default TransactionsTableRow;
