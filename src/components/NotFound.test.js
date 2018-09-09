import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import NotFound from './NotFound';

// this is how Route might attach props when the app is running
const props = {
  "match": {
    "path": "/notfound",
    "url": "/notfound",
    "isExact": true,
    "params": {}
  },
  "location": {
    "pathname": "/notfound",
    "search": "",
    "hash": "",
    "key": "z0h5az"
  },
  "history": {
    "length": 29,
    "action": "POP",
    "location": {
      "pathname": "/notfound",
      "search": "",
      "hash": "",
      "key": "z0h5az"
    }
  }
}

it('renders without crashing', () => {
  shallow(<NotFound {...props} />);
});
