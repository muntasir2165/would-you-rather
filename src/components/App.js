import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import PrivateRoute from "./PrivateRoute";
import Login from "./Login";
import NavBar from "./NavBar";
import LoadingBar from "react-redux-loading";
import Home from "./Home";
import AddQuestion from "./AddQuestion";
import Leaderboard from "./Leaderboard";
import { connect } from "react-redux";
import { handleInitialData } from "../actions/shared";
import { login, logout } from "../actions/authentication";
import QuestionDetails from "./QuestionDetails";

class App extends Component {
  componentDidMount() {
    this.props.handleInitialData();
  }

  logout = callbackFunction => {
    this.props.logout();
    callbackFunction();
  };

  render() {
    return (
      <Router>
        <NavBar loggedInUser={this.props.users[this.props.authedUser]} logout={this.logout} />
        <div className="container-fluid">
          <Switch>
            <Route
              exact
              path="/login"
              render={props => (
                <Login {...props} users={this.props.users} login={this.login} />
              )}
            />
            <PrivateRoute
              exact
              path="/"
              component={Home}
              isAuthenticated={this.props.authedUser}
            />
            <PrivateRoute
              exact
              path="/add"
              component={AddQuestion}
              isAuthenticated={this.props.authedUser}
            />
            <PrivateRoute
              exact
              path="/leaderboard"
              component={Leaderboard}
              isAuthenticated={this.props.authedUser}
            />
            <PrivateRoute
              exact
              path="/questions/:questionId"
              component={QuestionDetails}
              isAuthenticated={this.props.authedUser}
            />
          </Switch>
        </div>
      </Router>
    );
  }
}

const mapStateToProps = store => ({
  authedUser: store.authentication.authedUser,
  users: store.users
});

const mapDispatchToProps = dispatch => ({
  handleInitialData: () => dispatch(handleInitialData()),
  logout: () => dispatch(logout())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
