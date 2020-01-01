import React, { Component } from "react";
import { Button, Form } from "semantic-ui-react";
import { connect } from "react-redux";

import { actionUserName } from "../../../config/redux/action";
class Login extends Component {
  changeUser = () => {
    this.props.changeUserName();
    this.props.changePopup();
  };
  render() {
    return (
      <Form>
        <h2>
          Login Page - {this.props.popupProps} {this.props.userName}
        </h2>
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
        <Button type="button" onClick={this.changeUser}>
          Change User Name
        </Button>
        <Button type="button">Go to Register</Button>
        <Button type="button">Go to Dashboard</Button>
      </Form>
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
