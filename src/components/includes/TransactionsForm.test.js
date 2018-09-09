import React from 'react';
import ReactDOM from 'react-dom';
import { mount } from 'enzyme';
import TransactionsForm from './TransactionsForm';

it('renders without crashing', () => {
  mount(<TransactionsForm />);
});
