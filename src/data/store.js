import { createStore, compose } from 'redux';
import persistState from "redux-localstorage";

import initial from './initial';
import reducer from './reducer';
  
  // set up local storage
  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

  // store set up
  const store = createStore(
    reducer,
    initial,
    composeEnhancers(persistState())
  );
  
  export default store;