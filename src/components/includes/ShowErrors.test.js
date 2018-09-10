import React from 'react';
import ReactDOM from 'react-dom';
import { mount } from 'enzyme';
import ShowErrors from './ShowErrors';

it('renders without crashing', () => {
  mount(<ShowErrors />);
});
