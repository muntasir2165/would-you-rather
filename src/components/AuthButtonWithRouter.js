import React from "react";
import { withRouter } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSignOutAlt } from "@fortawesome/free-solid-svg-icons";

function AuthButton(props) {
  const { history } = props;
  return props.id ? (
    <button
      className="btn btn-link logout-button"
      onClick={() => {
        props.logout(() => history.push("/"));
      }}
    >
      Log Out <FontAwesomeIcon icon={faSignOutAlt} />
    </button>
  ) : null;
}

const AuthButtonWithRouter = withRouter(AuthButton);

export default AuthButtonWithRouter;
