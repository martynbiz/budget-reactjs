import React from 'react';
import ReactDOM from 'react-dom';
import { mount } from 'enzyme';
import TransactionsTable from './TransactionsTable';

import Pagination from './Pagination';

describe('<TransactionsTable />', () => {

  it('renders without crashing', () => {
    mount(<TransactionsTable />);
  });

  it('contains Pagination component', () => {
    const wrapper = mount(<TransactionsTable />);
    expect(wrapper.find(Pagination)).toHaveLength(1);
  });
});
