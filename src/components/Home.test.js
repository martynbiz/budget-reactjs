import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import Home from './Home';

// this is how Route might attach props when the app is running
const props = {
  "match": {
    "path": "/home",
    "url": "/home",
    "isExact": true,
    "params": {}
  },
  "location": {
    "pathname": "/home",
    "search": "",
    "hash": "",
    "key": "z0h5az"
  },
  "history": {
    "length": 29,
    "action": "POP",
    "location": {
      "pathname": "/home",
      "search": "",
      "hash": "",
      "key": "z0h5az"
    }
  }
}

it('renders without crashing', () => {
  shallow(<Home {...props} />);
});
