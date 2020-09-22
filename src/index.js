import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App0 from './App0';
import App1 from './App1';
import App2 from './App2';
import App3 from './App3';
import App4 from './App4';
import App5 from './App5';
import App6 from './App6';
import * as serviceWorker from './serviceWorker';

function DetermineApp(int) {
  switch (int) {
    case 0:
      return <App0/>;
    case 1:
      return <App1/>;
    case 2:
      return <App2/>;
    case 3:
      return <App3/>;
    case 4:
      return <App4/>;
    case 5:
      return <App5/>;
    case 6:
      return <App6/>;
  }
}

ReactDOM.render(
  <React.StrictMode>
    { DetermineApp(0) }
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
