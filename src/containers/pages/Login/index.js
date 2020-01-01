import React, { Component } from "react";
import { Button, Form } from "semantic-ui-react";
import { connect } from "react-redux";
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
