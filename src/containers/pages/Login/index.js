import React, { Component } from "react";

import { connect } from "react-redux";
class Login extends Component {
  changeUser = () => {
    this.props.changeUserName();
    this.props.changePopup();
  };
  render() {
    return (
      <div className="auth-container">
        <div className="auth-card">
          <h2 className="auth-title">
            Login Page - {this.props.popupProps} {this.props.userName}
          </h2>
          {/* <label>Name</label>
  <input className="input" type="text" placeholder="Your Name" /> */}

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

          <button className="btn" onClick={this.handleRegisterSubmit}>
            Register
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
const actionUserName = () => {
  return dispatch => {
    setTimeout(() => {
      return dispatch({ type: "CHANGE_USER", value: "Roby Afrizal Palmendha" });
    }, 2000);
  };
};

const reduxState = state => ({
  popupProps: state.popup,
  userName: state.user
});

const reduxDispatch = dispatch => ({
  changeUserName: () => dispatch(actionUserName()),
  changePopup: () =>
    dispatch({
      type: "CHANGE_POPUP",
      value: "Welcome"
    })
});

export default connect(reduxState, reduxDispatch)(Login);
