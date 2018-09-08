import React from 'react';

/**
 * This is just the display for transaction table. It needs to be passed submit and change
 * handles in its props
 */
const TransactionsForm = ( { description, amount, category, purchased_at, onChange } ) => (
  <div>
    <label>
      Description:
      <input type="text" name="description" value={description} onChange={onChange} />
    </label>
    <label>
      Amount:
      <input type="text" name="amount" value={amount} onChange={onChange} />
    </label>
    <label>
      Category:
      <input type="text" name="category" value={category} onChange={onChange} />
    </label>
    <label>
      Purchased:
      <input type="text" name="purchased_at" value={purchased_at} onChange={onChange} />
    </label>
  </div>
);

export default TransactionsForm;
