import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './store';
import TodoComponent from './TodoComponent';
import './index.css';
import './App.css'

ReactDOM.render(
  <Provider store={store}>
    <TodoComponent />
  </Provider>,
  document.getElementById('root')
);
