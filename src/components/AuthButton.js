import React from "react";
import { withRouter } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSignOutAlt } from "@fortawesome/free-solid-svg-icons";

function AuthButton(props) {
  const { history } = props;
  return props.authedUser ? (
    <button
      className="btn btn-link logout-button"
      onClick={() => {
        props.logout();
        history.push("/");
      }}
    >
      Logout <FontAwesomeIcon icon={faSignOutAlt} />
    </button>
  ) : null;
}

export default withRouter(AuthButton);
