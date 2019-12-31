import React, { Component } from "react";
import { Button } from "semantic-ui-react";

class Dashboard extends Component {
  render() {
    return (
      <div>
        <h2>Dashboard Page</h2>
        <Button type="button">Go to Login</Button>
        <Button type="button">Go to Register</Button>
      </div>
    );
  }
}

export default Dashboard;
