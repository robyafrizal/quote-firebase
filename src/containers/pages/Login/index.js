import React, { Component } from "react";
import firebase from "../../../config/firebase";

import { connect } from "react-redux";

import { actionUserName } from "../../../config/redux/action";
class Login extends Component {
  changeUser = () => {
    this.props.changeUserName();
    this.props.changePopup();
  };
  state = {
    email: "",
    password: ""
  };
  handleChangeText = e => {
    this.setState({
      [e.target.id]: e.target.value
    });
  };
  handleRegisterSubmit = () => {
    const { email, password } = this.state;
    console.log("Data yang dikirim: ", email, password);
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then(res => {
        console.log("success: ", res);
      })
      .catch(function(error) {
        var errorCode = error.code;
        var errorMessage = error.message;
        console.log(errorCode, errorMessage);
      });
  };

  render() {
    return (
      <div className="auth-container">
        <div className="auth-card">
          <h2 className="auth-title">
            Login Page - {this.props.popupProps} {this.props.userName}
          </h2>
          <center>
            <label>Email</label>
            <input
              className="input"
              type="email"
              id="email"
              placeholder="Your Email"
              onChange={this.handleChangeText}
            />

            <label>Password</label>
            <input
              className="input"
              type="password"
              id="password"
              placeholder="Your Password"
              onChange={this.handleChangeText}
            />
          </center>
          <button className="btn" onClick={this.handleLoginSubmit}>
            Login
          </button>
          <br />
          <br />
          <button className="btn" type="button" onClick={this.changeUser}>
            CHange User Name
          </button>
          <button className="btn" type="button">
            Go to Dashboard
          </button>
          <button className="btn" type="button">
            Go to Register
          </button>
        </div>
      </div>
    );
  }
}

const reduxState = state => ({
  popupProps: state.popup,
  userName: state.user
});

const reduxDispatch = dispatch => ({
  changePopup: () =>
    dispatch({
      type: "CHANGE_POPUP",
      value: "Welcome"
    }),
  changeUserName: () => dispatch(actionUserName())
});

export default connect(reduxState, reduxDispatch)(Login);
