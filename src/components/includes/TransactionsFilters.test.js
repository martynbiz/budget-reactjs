import React from 'react';
import ReactDOM from 'react-dom';
import { mount } from 'enzyme';
import TransactionsFilters from './TransactionsFilters';

it('renders without crashing', () => {
  mount(<TransactionsFilters />);
});
