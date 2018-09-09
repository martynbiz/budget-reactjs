import React from 'react';
import ReactDOM from 'react-dom';
import { mount } from 'enzyme';
import TransactionsTable from './TransactionsTable';

import Pagination from './Pagination';

describe('<TransactionsTable />', () => {

  it('renders without crashing', () => {
    mount(<TransactionsTable />);
  });

  it('contains a table', () => {
    const wrapper = mount(<TransactionsTable />);
    expect(wrapper.find(Pagination)).to.have.lengthOf(1);
  });
});
