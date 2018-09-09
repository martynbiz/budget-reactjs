import React from 'react';
import ReactDOM from 'react-dom';
import { mount } from 'enzyme';
import Pagination from './Pagination';

it('renders without crashing', () => {
  mount(<Pagination />);
});
