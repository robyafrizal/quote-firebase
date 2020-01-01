import React, { Component } from "react";
import { Button, Form } from "semantic-ui-react";
import { connect } from "react-redux";
class Login extends Component {
  render() {
    return (
      <Form>
        <h2>Login Page {this.props.popupProps}</h2>
        <Form.Field>
          <label>Email</label>
          <input type="email" placeholder="Your Email" />
        </Form.Field>
        <Form.Field>
          <label>Password</label>
          <input type="password" placeholder="Your Password" />
        </Form.Field>
        <Button type="submit">Login</Button>
        <br />
        <br />
        <Button type="button">Go to Register</Button>
        <Button type="button">Go to Dashboard</Button>
      </Form>
    );
  }
}

const reduxState = state => ({
  popupProps: state.popup
});

export default connect(reduxState, null)(Login);
