import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import TopBar from './TopBar';

it('renders without crashing', () => {
  shallow(<TopBar />);
});
