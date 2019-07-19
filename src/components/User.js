import React from "react";

const User = props => {
  return (
    <div className="row text-center border border-secondary rounded m-2">
      <div className="col-sm-4">
        <img
          src={props.user.avatarURL}
          alt="user avatar"
          className="img-thumbnail user-avatar m-auto"
        />
      </div>
      <div className="col-sm-5">
        <div className="row">
          <div className="col-sm-12">
            <h3>{props.user.name}</h3>
          </div>
        </div>
        <div className="row mt-4">
          <div className="col-sm-12">
            Questions Asked: {Object.keys(props.user.questions).length}
          </div>
        </div>
        <div className="row">
          <div className="col-sm-12">
            Questions Answered: {Object.keys(props.user.answers).length}
          </div>
        </div>
      </div>
      <div className="col-sm-3">
        <div className="row border border-secondary user-score-container m-1">
          <div className="col-sm-12">
            <div className="row user-score-label my-1">
              <div className="col-sm-12 mt-4 bg-success text-truncate">
                Score
              </div>
            </div>
            <hr />
            <div className="row user-score-value">
              <div className="col-sm-12 mt-4">
                <h4 className="rounded bg-success">
                  {Object.keys(props.user.questions).length +
                    Object.keys(props.user.answers).length}
                </h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default User;
