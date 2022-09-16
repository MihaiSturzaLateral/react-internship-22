import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import Counter from './Counter';
import {configureStore} from '@reduxjs/toolkit';
import counterReducer from './counterReducer';

const root = ReactDOM.createRoot(document.getElementById('root'));

const store = configureStore({
  reducer: {
     counterReducer,
  },
});
root.render(
  <Provider store={store}>
    <Counter />
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
