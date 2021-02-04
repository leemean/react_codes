import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import logger from 'redux-logger'
import thunk from 'redux-thunk'
import { composeWithDevTools } from "redux-devtools-extension";
import { createStore,applyMiddleware } from "redux";

import rootReducer1 from "./reducers";
import { Provider } from "react-redux";

const store = createStore(rootReducer1,composeWithDevTools(applyMiddleware(logger,thunk)))

ReactDOM.render(
  <Provider store={ store }>
    <App />
  </Provider>,
  document.getElementById('root')
);
