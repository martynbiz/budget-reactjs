import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import TransactionsCreate from './TransactionsCreate';

// this is how Route might attach props when the app is running
const props = {
  "match": {
    "path": "/transactions/create",
    "url": "/transactions/create",
    "isExact": true,
    "params": {}
  },
  "location": {
    "pathname": "/transactions/create",
    "search": "",
    "hash": "",
    "key": "z0h5az"
  },
  "history": {
    "length": 29,
    "action": "POP",
    "location": {
      "pathname": "/transactions/create",
      "search": "",
      "hash": "",
      "key": "z0h5az"
    }
  }
}

it('renders without crashing', () => {
  shallow(<TransactionsCreate {...props} />);
});
