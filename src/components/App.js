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
import { login, logout } from "../actions/authentication";

class App extends Component {
  login = callbackFunction => {
    this.props.login("sarahedo");
    callbackFunction();
  };

  logout = callbackFunction => {
    this.props.logout("sarahedo");
    callbackFunction();
  };

  render() {
    return (
      <Router>
        <div>
          <AuthButtonWithRouter
            isAuthenticated={this.props.id}
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
            isAuthenticated={this.props.id}
          />
        </div>
      </Router>
    );
  }
}

const mapStateToProps = state => ({
  id: state.authentication.id
});

const mapDispatchToProps = dispatch => ({
  handleInitialData: () => dispatch(handleInitialData()),
  login: id => dispatch(login(id)),
  logout: id => dispatch(logout(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
