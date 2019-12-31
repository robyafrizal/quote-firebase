import React, { Component } from "react";
import "./Register.scss";

class Register extends Component {
  render() {
    return (
      <div className="auth-container">
        <div className="auth-card">
          <h2 className="auth-title">Register Page</h2>
          <label>Name</label>
          <input className="input" type="text" placeholder="Your Name" />

          <label>Email</label>
          <input className="input" type="email" placeholder="Your Email" />

          <label>Password</label>
          <input
            className="input"
            type="password"
            placeholder="Your Password"
          />

          <button className="btn" type="submit">
            Register
          </button>
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
