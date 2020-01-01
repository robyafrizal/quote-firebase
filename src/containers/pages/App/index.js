import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "semantic-ui-css/semantic.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { createStore } from "redux";
import { Provider } from "react-redux";

// import logo from "../../../assets/img/logo/logo.svg";
import "./App.css";
import Dashboard from "../Dashboard";
import Login from "../Login";
import Register from "../Register";

//state global
const initialState = {
  popup: false,
  isLogin: false
};

const reducer = (state = initialState, action) => {
  if (action.type === "CHANGE_POPUP") {
    return {
      ...state,
      popup: action.value
    };
  }
  if (action.type === "CHANGE_ISLOGIN") {
    return {
      ...state,
      isLogin: action.value
    };
  }
  return state;
};
//reducer adalah kumpulan instruksi untuk merubah store
//state adalah state yang akan menjadi value kita ketika kita membuat state global

const store = createStore(reducer);

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/">Dashboard</Link>
              </li>
              <li>
                <Link to="/login">Login</Link>
              </li>
              <li>
                <Link to="/register">Register</Link>
              </li>
            </ul>
          </nav>

          <Route path="/" exact component={Dashboard} />
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
        </div>
      </Router>
    </Provider>
  );
}

export default App;
