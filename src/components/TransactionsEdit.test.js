import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import TransactionsEdit from './TransactionsEdit';

// this is how Route might attach props when the app is running
const props = {
  "match": {
    "path": "/transactions/1",
    "url": "/transactions/1",
    "isExact": true,
    "params": {}
  },
  "location": {
    "pathname": "/transactions/1",
    "search": "",
    "hash": "",
    "key": "z0h5az"
  },
  "history": {
    "length": 29,
    "action": "POP",
    "location": {
      "pathname": "/transactions/1",
      "search": "",
      "hash": "",
      "key": "z0h5az"
    }
  }
}

it('renders without crashing', () => {
  shallow(<TransactionsEdit {...props} />);
});
