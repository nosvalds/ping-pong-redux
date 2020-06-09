import React from 'react';
import ReactDOM from 'react-dom'; // renders React into the browser, could replace with ReactNative for an iOS app for example
import './index.css';
import App from './App';
import store from './data/store';

import { Provider } from 'react-redux';

// Rendering

const render = () => {
  let state = store.getState();

  // Strict mode gives you extra validation and warnings when you're building things. Newer is the latest 3mo
  // gets the root element from index.html

  ReactDOM.render(
    <React.StrictMode> 
      <Provider store={ store }> {/* provider has access to both Redux and React side of application */}
        <App 
        server={ state.server }
        player1={ state.player1 } 
        player2={ state.player2 }
        winner={ state.winner }
        gameHistory={ state.gameHistory }
        handleIncrementP1={ () => store.dispatch({ type: "INCREMENT_P1" }) }
        handleIncrementP2={ () => store.dispatch({ type: "INCREMENT_P2" }) }
        handleReset = { () => store.dispatch({ type: "RESET" }) }
        handleLanguage={ () => store.dispatch({ type: "TOGGLE_LANGUAGE" }) }
        language={ state.language }
        />
      </Provider>
    </React.StrictMode>,
    document.getElementById('root') 
  );
}

store.subscribe(render); // render when state changes
render(); // render when page loads using initial state
