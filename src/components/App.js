import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import AuthButtonWithRouter from "./AuthButtonWithRouter";
import Login from "./Login";
import PrivateRoute from "./PrivateRoute";
import Public from "./Public";
import Protected from "./Protected";
import LoadingBar from "react-redux-loading";
import Home from "./Home";
import NewQuestion from "./NewQuestion";
import Leaderboard from "./Leaderboard";
import { connect } from "react-redux";
import { handleInitialData } from "../actions/shared";
import { login, logout } from "../actions/authentication";

class App extends Component {
  componentDidMount() {
    this.props.handleInitialData();
  }

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
            <li>
              <Link to="/home">Home</Link>
            </li>
            <li>
              <Link to="/newQuestion">New Question</Link>
            </li>
            <li>
              <Link to="/leaderboard">Leaderboard</Link>
            </li>
          </ul>
          <Route path="/public" component={Public} />
          <Route
            path="/login"
            render={props => <Login {...props} users={this.props.users} login={this.login} />}
          />
          <PrivateRoute
            path="/protected"
            component={Protected}
            isAuthenticated={this.props.id}
          />
          <PrivateRoute
            path="/home"
            component={Home}
            isAuthenticated={this.props.id}
          />
          <PrivateRoute
            path="/newQuestion"
            component={NewQuestion}
            isAuthenticated={this.props.id}
          />
          <PrivateRoute
            path="/leaderboard"
            component={Leaderboard}
            isAuthenticated={this.props.id}
          />
        </div>
      </Router>
    );
  }
}

const mapStateToProps = store => ({
  id: store.authentication.id,
  users: store.users.users,
  questions: store.questions.questions
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
