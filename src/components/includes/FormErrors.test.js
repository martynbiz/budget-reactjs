import React from 'react';
import ReactDOM from 'react-dom';
import { mount } from 'enzyme';
import FormErrors from './FormErrors';

it('renders without crashing', () => {
  mount(<FormErrors />);
});
