import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import Register from './Register';

// this is how Route might attach props when the app is running
const props = {
  "match": {
    "path": "/register",
    "url": "/register",
    "isExact": true,
    "params": {}
  },
  "location": {
    "pathname": "/register",
    "search": "",
    "hash": "",
    "key": "z0h5az"
  },
  "history": {
    "length": 29,
    "action": "POP",
    "location": {
      "pathname": "/register",
      "search": "",
      "hash": "",
      "key": "z0h5az"
    }
  }
}

it('renders without crashing', () => {
  shallow(<Register {...props} />);
});
