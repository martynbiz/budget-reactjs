import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import TransactionsList from './TransactionsList';

// this is how Route might attach props when the app is running
const props = {
  "match": {
    "path": "/transactions",
    "url": "/transactions",
    "isExact": true,
    "params": {}
  },
  "location": {
    "pathname": "/transactions",
    "search": "",
    "hash": "",
    "key": "z0h5az"
  },
  "history": {
    "length": 29,
    "action": "POP",
    "location": {
      "pathname": "/transactions",
      "search": "",
      "hash": "",
      "key": "z0h5az"
    }
  }
}

it('renders without crashing', () => {
  shallow(<TransactionsList {...props} />);
});
