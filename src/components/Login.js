import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import ReactGif from "./react.gif";
import { connect } from "react-redux";
import { login } from "../actions/authentication";

class Login extends Component {
  state = { redirectToReferrer: false, selectedAuthedUser: "" };

  onSelectedAuthedUserChange = event => {
    event.preventDefault();
    this.setState({ [event.target.name]: event.target.value });
  };

  login = () => {
    this.props.login(this.state.selectedAuthedUser);
    this.setState({ redirectToReferrer: true });
  };

  render() {
    let { from } = this.props.location.state || { from: { pathname: "/" } };
    let { redirectToReferrer } = this.state;

    if (redirectToReferrer) return <Redirect to={from} />;

    return (
      <div className="row text-center m-2">
        <div className="col-sm-6 offset-sm-3 offset-sm-right-3 border border-secondary rounded my-2">
          <div className="row">
            <div className="col-sm-12">
              <h3>Welcome to the Would You Rather App!</h3>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-12">
              <h4>Please sign in to continue</h4>
            </div>
          </div>
          <div className="row my-2">
            <div className="col-sm-12">
              <div className="row">
                <div className="col-sm-12">
                  <img
                    src={ReactGif}
                    alt="React Gif"
                    className="login-page-react-gif"
                  />
                </div>
              </div>
              <div className="row my-2">
                <div className="col-sm-12">
                  <form onSubmit={this.login}>
                    <div className="form-group">
                      <select
                        className="form-control"
                        onChange={this.onSelectedAuthedUserChange}
                        name="selectedAuthedUser"
                      >
                        <option value="" />
                        {Object.keys(this.props.users).map(userId => (
                          <option key={userId} value={userId} id={userId}>
                            {this.props.users[userId].name}
                          </option>
                        ))}
                      </select>
                    </div>
                    <button
                      type="submit"
                      className="btn btn-info btn-block mt-3"
                      disabled={!this.state.selectedAuthedUser}
                    >
                      Submit
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = store => ({
  users: store.users
});

const mapDispatchToProps = dispatch => ({
  login: id => dispatch(login(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);
