import React, { Component } from "react";
import { Button, Form, Segment } from "semantic-ui-react";
import { connect } from "react-redux";

import { actionUserName } from "../../../config/redux/action";
class Login extends Component {
  changeUser = () => {
    this.props.changeUserName();
    this.props.changePopup();
  };
  render() {
    return (
      <Segment
        inverted
        className="text-center"
        style={{ width: "80%", margin: "auto" }}
      >
        <Form inverted>
          <h2>
            Login Page - {this.props.popupProps} {this.props.userName}
          </h2>
          <center className="my-5">
            <Form.Field width={8}>
              <label>Email</label>
              <input type="email" placeholder="Your Email" />
            </Form.Field>
            <Form.Field width={8}>
              <label>Password</label>
              <input type="password" placeholder="Your Password" />
            </Form.Field>
          </center>
          <Button
            onClick={this.handleLoginSubmit}
            title="Lgin"
            loading={this.props.isLoading}
          />
          <br />
          <br />
          <Button type="button" onClick={this.changeUser}>
            Change User Name
          </Button>
          <Button type="button">Go to Register</Button>
          <Button type="button">Go to Dashboard</Button>
        </Form>
      </Segment>
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
