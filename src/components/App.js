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
import QuestionDetails from "./QuestionDetails";

class App extends Component {
  componentDidMount() {
    this.props.handleInitialData();
  }

  render() {
    return (
      <Router>
        <NavBar />
        <div className="container-fluid">
          <Switch>
            <Route exact path="/login" render={props => <Login {...props} />} />
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
  handleInitialData: () => dispatch(handleInitialData())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
