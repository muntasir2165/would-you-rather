import React, { Component } from "react";
import { Redirect } from "react-router-dom";

class Login extends Component {
  state = { redirectToReferrer: false };

  login = () => {
    this.props.login(() => {
      this.setState({ redirectToReferrer: true });
    });
  };

  render() {
    let { from } = this.props.location.state || { from: { pathname: "/" } };
    let { redirectToReferrer } = this.state;

    if (redirectToReferrer) return <Redirect to={from} />;

    return (
      <div>
        <ul>
          {Object.keys(this.props.users).map(userId => (
            <li key={userId}>{this.props.users[userId]["name"]}</li>
          ))}
        </ul>
        <p>You must log in to view the page at {from.pathname}</p>
        <button onClick={this.login}>Log in</button>
      </div>
    );
  }
}

export default Login;
