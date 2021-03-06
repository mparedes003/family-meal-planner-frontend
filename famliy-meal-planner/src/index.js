import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import rootReducers from './store/reducers';

const reducers = {
  form: formReducer,
  rootReducers,
};

const reducer = combineReducers(reducers);

// This line instantiates our central Redux store.
// The `createStore` function receives the reducer
// that is responsible for updating the store, along
// with any initial state that we may want the store
// to start out with (combineReducers, applyMiddleware(thunk, logger)).
const store = createStore(reducer, applyMiddleware(thunk, logger));

// Here, we wrap our main React component inside of
// Provider tags, which come from the react-redux package.
// This is needed because the store needs to know where it
// is passing its state to. The Provider component is also
// where the store "lives".
ReactDOM.render(
  <Router>
    <Provider store={store}>
      <App />
    </Provider>
  </Router>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
