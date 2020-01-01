import React, { Component } from "react";
import firebase from "../../../config/firebase";

import "./Register.scss";
import Button from "../../../components/atoms/Button";

class Register extends Component {
  state = {
    email: "",
    password: ""
  };
  handleChangeText = e => {
    // console.log(e.target.id);
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
          <h2 className="auth-title">Register Page</h2>
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

          {/* <button className="btn" onClick={this.handleRegisterSubmit}>
            Register
          </button> 
          //Tidak digunakan lagi karena sudah menggunakan redux*/}
          <Button onClick={this.handleRegisterSubmit} title="Register" />
          <br />
          <br />
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

export default Register;
