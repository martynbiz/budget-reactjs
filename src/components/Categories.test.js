import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import Categories from './Categories';

// this is how Route might attach props when the app is running
const props = {
  "match": {
    "path": "/categories",
    "url": "/categories",
    "isExact": true,
    "params": {}
  },
  "location": {
    "pathname": "/categories",
    "search": "",
    "hash": "",
    "key": "z0h5az"
  },
  "history": {
    "length": 29,
    "action": "POP",
    "location": {
      "pathname": "/categories",
      "search": "",
      "hash": "",
      "key": "z0h5az"
    }
  }
}

it('renders without crashing', () => {
  shallow(<Categories {...props} />);
});
