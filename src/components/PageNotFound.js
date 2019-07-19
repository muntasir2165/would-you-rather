import React from "react";
import { withRouter } from "react-router-dom";
import NotFoundPage from "./NotFoundPage.gif";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFrown, faHome } from "@fortawesome/free-solid-svg-icons";

function PageNotFound(props) {
  const { history } = props;
  return (
    <div className="row text-center">
      <div className="col-sm-12">
        <div className="row mt-3">
          <div className="col-sm-12">
            <img src={NotFoundPage} alt="Not Found Page Gif" />
          </div>
        </div>
        <div className="row">
          <div className="col-sm-12">
            <h1>404: Page Not Found</h1>
            <h2>
              <FontAwesomeIcon icon={faFrown} />
            </h2>
            <button
              className="btn btn-info mt-3"
              onClick={() => {
                history.push("/");
              }}
            >
              <FontAwesomeIcon icon={faHome} /> Home
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default withRouter(PageNotFound);
