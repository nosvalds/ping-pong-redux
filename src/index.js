import React from 'react';
import ReactDOM from 'react-dom'; // renders React into the browser, could replace with ReactNative for an iOS app for example
import './index.css';
import App from './components/App';
import store from './data/store';

import { Provider } from 'react-redux';

// Rendering

// Strict mode gives you extra validation and warnings when you're building things. Newer is the latest 3mo
// gets the root element from index.html

ReactDOM.render(
  <React.StrictMode> 
    <Provider store={ store }> {/* provider has access to both Redux and React side of application, allows us to avoid prop drilling */}
      <App 
        handleIncrementP1={ () => store.dispatch({ type: "INCREMENT_P1" }) }
        handleIncrementP2={ () => store.dispatch({ type: "INCREMENT_P2" }) }
        handleReset = { () => store.dispatch({ type: "RESET" }) }
        handleLanguage={ () => store.dispatch({ type: "TOGGLE_LANGUAGE" }) }
      />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root') 
);


