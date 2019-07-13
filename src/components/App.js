import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import AuthButtonWithRouter from "./AuthButtonWithRouter";
import Login from "./Login";
import PrivateRoute from "./PrivateRoute";
import Public from "./Public";
import Protected from "./Protected";
import LoadingBar from "react-redux-loading";
import { connect } from "react-redux";
import { handleInitialData } from "../actions/shared";

class App extends Component {
  state = {
    isAuthenticated: false
  };

  login = callbackFunction => {
    this.setState({ isAuthenticated: true }, () => setTimeout(callbackFunction, 100));
  };

  logout = callbackFunction => {
    this.setState({ isAuthenticated: false }, () => setTimeout(callbackFunction, 100));
  };

  render() {
    return (
      <Router>
        <div>
          <AuthButtonWithRouter
            isAuthenticated={this.state.isAuthenticated}
            login={this.login}
            logout={this.logout}
          />
          <ul>
            <li>
              <Link to="/public">Public Page</Link>
            </li>
            <li>
              <Link to="/protected">Protected Page</Link>
            </li>
          </ul>
          <Route path="/public" component={Public} />
          <Route
            path="/login"
            render={props => <Login {...props} login={this.login} />}
          />
          <PrivateRoute
            path="/protected"
            component={Protected}
            isAuthenticated={this.state.isAuthenticated}
          />
        </div>
      </Router>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  handleInitialData: () => dispatch(handleInitialData())
});

export default connect(
  null,
  mapDispatchToProps
)(App);
