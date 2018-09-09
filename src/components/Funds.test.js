import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import Funds from './Funds';

// this is how Route might attach props when the app is running
const props = {
  "match": {
    "path": "/funds",
    "url": "/funds",
    "isExact": true,
    "params": {}
  },
  "location": {
    "pathname": "/funds",
    "search": "",
    "hash": "",
    "key": "z0h5az"
  },
  "history": {
    "length": 29,
    "action": "POP",
    "location": {
      "pathname": "/funds",
      "search": "",
      "hash": "",
      "key": "z0h5az"
    }
  }
}

it('renders without crashing', () => {
  shallow(<Funds {...props} />);
});
