import React, { Component, Fragment } from "react";
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect,
  Switch,
  withRouter
} from "react-router-dom";
import { connect } from "react-redux";
import { handleInitialData } from "../actions/shared";
// import Login from "./Login";
// import PrivateRoute from "./PrivateRoute";
import Nav from "./Nav";
import Dashboard from "./Dashboard";
import NewQuestion from "./NewQuestion";
import Question from "./Question";
import Leaderboard from "./Leaderboard";
import LoadingBar from "react-redux-loading";

class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData());
  }
  render() {
    return (
      <Router>
        <LoadingBar />
        <div className="container-fluid">
          <Nav />
          <AuthButton />
          <ul>
            <li>
              <Link to="/public">Public Page</Link>
            </li>
            <li>
              <Link to="/protected">Protected Page</Link>
            </li>
          </ul>
          <Switch>
            <Route path="/public" component={Public} />
            <Route path="/login" component={Login} />
            <PrivateRoute
              authentication={fakeAuth.isAuthenticated}
              path="/protected"
              component={Protected}
            />
            <PrivateRoute
              authentication={fakeAuth.isAuthenticated}
              path="/dashboard"
              component={Dashboard}
            />
            <PrivateRoute
              authentication={fakeAuth.isAuthenticated}
              path="/new"
              component={NewQuestion}
            />
            <PrivateRoute
              authentication={fakeAuth.isAuthenticated}
              path="/leaderboard"
              component={Leaderboard}
            />
            {/*<PrivateRoute authentication={fakeAuth.isAuthenticated} path="/question/:id" component={Question} /> */}
          </Switch>
        </div>
      </Router>
    );
  }
}

const fakeAuth = {
  isAuthenticated: false,
  authenticate(cb) {
    this.isAuthenticated = true;
    setTimeout(cb, 100); // fake async
  },
  signout(cb) {
    this.isAuthenticated = false;
    setTimeout(cb, 100);
  }
};

const AuthButton = withRouter(({ history }) =>
  fakeAuth.isAuthenticated ? (
    <p>
      Welcome!{" "}
      <button
        onClick={() => {
          fakeAuth.signout(() => history.push("/"));
        }}
      >
        Sign out
      </button>
    </p>
  ) : (
    <p>You are not logged in.</p>
  )
);

function PrivateRoute({ component: Component, ...rest }) {
  return (
    <Route
      {...rest}
      render={props =>
        fakeAuth.isAuthenticated ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: props.location }
            }}
          />
        )
      }
    />
  );
}

function Public() {
  return <h3>Public</h3>;
}

function Protected() {
  return <h3>Protected</h3>;
}

class Login extends Component {
  state = { redirectToReferrer: false };

  login = () => {
    fakeAuth.authenticate(() => {
      this.setState({ redirectToReferrer: true });
    });
  };

  render() {
    let { from } = this.props.location.state || { from: { pathname: "/" } };
    let { redirectToReferrer } = this.state;

    if (redirectToReferrer) return <Redirect to={from} />;

    return (
      <div>
        <p>You must log in to view the page at {from.pathname}</p>
        <button onClick={this.login}>Log in</button>
      </div>
    );
  }
}

const mapStateToProps = ({ id }) => ({
  id
});

export default connect(mapStateToProps)(App);
