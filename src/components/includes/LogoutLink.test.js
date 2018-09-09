import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import LogoutLink from './LogoutLink';

it('renders without crashing', () => {
  shallow(<LogoutLink />);
});
