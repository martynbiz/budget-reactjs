import React from 'react';
import ReactDOM from 'react-dom';
import { mount } from 'enzyme';
import TransactionsSearchForm from './TransactionsSearchForm';

it('renders without crashing', () => {
  mount(<TransactionsSearchForm />);
});
