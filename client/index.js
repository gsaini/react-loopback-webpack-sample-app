import 'babel-polyfill';

import React from 'react';
import { render } from 'react-dom';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

import { Provider } from 'react-redux';
import configureStore from './store/configureStore';
import App from './app';
import './public/stylesheets/main.scss';

const store = configureStore();

render(
  <Provider store={store}>
  		<App />
  </Provider>,
  document.getElementById('root')
);