import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
// import 'bootstrap/dist/css/bootstrap.min.css';
import {Provider} from "react-redux";
import {createStore} from "redux";
import reducer from "./LocalState/reducer";
import {loadState , saveState } from "./LocalState/states";


const persistedState = loadState();
const store = createStore(reducer, persistedState );
store.subscribe( () =>{
  saveState(store.getState());
});

ReactDOM.render(
  <Provider store={store}>
  <React.StrictMode>
    <App />
  </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);
reportWebVitals();