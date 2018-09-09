import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import Tags from './Tags';

// this is how Route might attach props when the app is running
const props = {
  "match": {
    "path": "/tags",
    "url": "/tags",
    "isExact": true,
    "params": {}
  },
  "location": {
    "pathname": "/tags",
    "search": "",
    "hash": "",
    "key": "z0h5az"
  },
  "history": {
    "length": 29,
    "action": "POP",
    "location": {
      "pathname": "/tags",
      "search": "",
      "hash": "",
      "key": "z0h5az"
    }
  }
}

it('renders without crashing', () => {
  shallow(<Tags {...props} />);
});
