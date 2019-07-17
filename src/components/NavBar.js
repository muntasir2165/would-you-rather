import React from "react";
import { NavLink } from "react-router-dom";
import AuthButton from "./AuthButton";

export default function Navbar(props) {
  return (
    <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
      <NavLink className="navbar-brand" to="/">
        Would You Rather
      </NavLink>

      <ul className="navbar-nav">
        <li className="nav-item">
          <NavLink
            className="nav-link"
            activeStyle={{ color: "white" }}
            to="/public"
          >
            Public
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink
            className="nav-link"
            activeStyle={{ color: "white" }}
            to="/protected"
          >
            Protected
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" activeStyle={{ color: "white" }} to="/">
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
          <AuthButton authedUser={props.authedUser} logout={props.logout} />
        </li>
      </ul>
    </nav>
  );
}
