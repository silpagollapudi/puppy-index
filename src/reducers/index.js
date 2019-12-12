import { combineReducers } from 'redux';

import breeds from './breeds.js';
import pics from './pics.js';

const reducers = combineReducers({
  breeds,
  pics,
  
});

export default reducers;
