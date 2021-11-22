import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import store from './stores';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App title="Counter App" />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);


reportWebVitals();