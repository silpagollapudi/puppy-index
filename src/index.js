import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import reducers from './reducers';
import thunk from 'redux-thunk';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import {fetchDogList} from './actions/index';

const store = createStore(reducers, applyMiddleware(thunk))

ReactDOM.render(
  <Provider store={store}>
  <App />
  </Provider>,
  document.getElementById('root')
);

store.dispatch(fetchDogList());
