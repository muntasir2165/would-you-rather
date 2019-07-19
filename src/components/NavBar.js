import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import AuthButton from "./AuthButton";
import AppLogo from "./app-logo.jpg";
import { connect } from "react-redux";
import { logout } from "../actions/authentication";

class Navbar extends Component {
  render() {
    return ( this.props.authedUser && 
      <nav className="navbar navbar-expand-md bg-dark navbar-dark">
        <NavLink className="navbar-brand" to="/">
          <img
            src={AppLogo}
            alt="Would You Rather Logo"
            className="rounded navbar-brand-app-logo"
          />
        </NavLink>

        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#collapsibleNavbar"
        >
          <span className="navbar-toggler-icon" />
        </button>

        <div className="collapse navbar-collapse" id="collapsibleNavbar">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <NavLink
                className="nav-link"
                activeStyle={{ color: "white" }}
                to="/404"
              >
                Surprise!
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink
                className="nav-link"
                activeStyle={{ color: "white" }}
                to="/"
              >
                Home
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink
                className="nav-link"
                activeStyle={{ color: "white" }}
                to="/add"
              >
                New Question
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink
                className="nav-link"
                activeStyle={{ color: "white" }}
                to="/leaderboard"
              >
                LeaderBoard
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink
                className="nav-link"
                activeStyle={{ color: "white" }}
                to="#"
              >
                Hello {this.props.users[this.props.authedUser].name}
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink
                className="nav-link"
                activeStyle={{ color: "white" }}
                to="#"
              >
                <img
                  src={
                    this.props.authedUser &&
                    this.props.users[this.props.authedUser].avatarURL
                  }
                  alt="user avatar"
                  className="rounded-circle thumbnail-user-avatar"
                />
              </NavLink>
            </li>

            <li className="nav-item">
              <AuthButton
                authedUser={this.props.authedUser}
                logout={this.props.logout}
              />
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

const mapStateToProps = store => ({
  authedUser: store.authentication.authedUser,
  users: store.users
});

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Navbar);
