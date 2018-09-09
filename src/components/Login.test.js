import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import Login from './Login';

// this is how Route might attach props when the app is running
const props = {
  "match": {
    "path": "/login",
    "url": "/login",
    "isExact": true,
    "params": {}
  },
  "location": {
    "pathname": "/login",
    "search": "",
    "hash": "",
    "key": "z0h5az"
  },
  "history": {
    "length": 29,
    "action": "POP",
    "location": {
      "pathname": "/login",
      "search": "",
      "hash": "",
      "key": "z0h5az"
    }
  }
}

it('renders without crashing', () => {
  shallow(<Login {...props} />);
});
