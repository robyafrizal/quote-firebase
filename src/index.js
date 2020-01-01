import React from "react";
import ReactDOM from "react-dom";
import { createStore } from "redux";

import "./index.css";
import App from "./containers/pages/App";
import * as serviceWorker from "./serviceWorker";
import firebase from "./config/firebase";

console.log("config firebase = ", firebase);

//state global
const initialState = {
  popup: false
};

const reducer = (state = initialState, action) => {
  return state;
};
//reducer adalah kumpulan instruksi untuk merubah store
//state adalah state yang akan menjadi value kita ketika kita membuat state global

const store = createStore(reducer);

ReactDOM.render(<App />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
