import React from 'react';
import ReactDOM from 'react-dom';
import { mount } from 'enzyme';
import PaginationLinks from './PaginationLinks';

it('renders without crashing', () => {
  mount(<PaginationLinks/>);
});
