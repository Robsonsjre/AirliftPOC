import "materialize-css/dist/css/materialize.min.css"
import './styles/base.scss'
import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import reduxThunk from 'redux-thunk'
import axios from 'axios';
import App from "./components/App";
import reducers from "./reducers"
// Create store:
// 1) argument: Reducers
// 2) not got yet, i think something to server side render
// 3) Middlewares, redux thunk and saga enters here
const store = createStore(reducers, applyMiddleware(reduxThunk));
window.axios = axios;
// Envolve the first top component with provider to give access to store from
//all components and pass store as a props.
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.querySelector("#root") //Id root at index.html
);
