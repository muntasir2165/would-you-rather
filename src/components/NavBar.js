import React from "react";
import { NavLink } from "react-router-dom";
import AuthButton from "./AuthButton";
import AppLogo from "./app-logo.jpg";

export default function Navbar(props) {
  return (
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
          {props.loggedInUser && (
            <li className="nav-item">
              <NavLink
                className="nav-link"
                activeStyle={{ color: "white" }}
                to="#"
              >
                Hello {props.loggedInUser.name}
              </NavLink>
            </li>
          )}
          {props.loggedInUser && (
            <li className="nav-item">
              <NavLink
                className="nav-link"
                activeStyle={{ color: "white" }}
                to="#"
              >
                <img
                  src={props.loggedInUser && props.loggedInUser.avatarURL}
                  alt="user avatar"
                  className="rounded-circle navbar-logged-in-user-avatar"
                />
              </NavLink>
            </li>
          )}
          <li className="nav-item">
            <AuthButton
              authedUser={props.loggedInUser && props.loggedInUser.id}
              logout={props.logout}
            />
          </li>
        </ul>
      </div>
    </nav>
  );
}
