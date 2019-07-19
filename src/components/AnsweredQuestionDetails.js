import React from "react";
import { connect } from "react-redux";

const AnsweredQuestionDetails = props => {
  const question = props.questions[props.questionId];
  const author = props.users[question.author];
  const optionOneVotes = question.optionOne.votes;
  const optionTwoVotes = question.optionTwo.votes;
  const totalVotes = optionOneVotes.length + optionTwoVotes.length;
  const optionOneVotesPercentage = (
    (optionOneVotes.length * 100) /
    totalVotes
  ).toFixed(2);
  const optionTwoVotesPercentage = (
    (optionTwoVotes.length * 100) /
    totalVotes
  ).toFixed(2);
  return (
    <div className="row">
      <div className="col-sm-6 offset-sm-3 offset-sm-right-3 border border-secondary rounded mt-2">
        <div className="row bg-secondary">
          <div className="col-sm-12">
            <h4>Asked by {author.name}</h4>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-12">
            <div className="row">
              <div className="col-sm-4">
                <img
                  src={author.avatarURL}
                  alt="author avatar"
                  className="img-thumbnail user-avatar m-auto"
                />
              </div>
              <div className="col-sm-8">
                <div className="row">
                  <div className="col-sm-12">
                    <h4>Results:</h4>
                  </div>
                </div>
                <div className="row">
                  <div className="col-sm-12">
                    Would you rather {question.optionOne.text}?
                    {optionOneVotes.indexOf(props.authedUser) !== -1 && (
                      <span className="badge badge-secondary mx-1">
                        Your Vote
                      </span>
                    )}
                    <div className="progress">
                      <div
                        className="progress-bar bg-secondary progress-bar-striped progress-bar-animated"
                        style={{
                          width: `${optionOneVotesPercentage}%`
                        }}
                      >
                        {optionOneVotesPercentage}%
                      </div>
                    </div>
                    <h6 className="text-center mt-2">{`${
                      optionOneVotes.length
                    } of ${totalVotes}`}</h6>
                  </div>
                </div>
                <div className="row">
                  <div className="col-sm-12">
                    Would you rather {question.optionTwo.text}?
                    {optionTwoVotes.indexOf(props.authedUser) !== -1 && (
                      <span className="badge badge-secondary mx-1">
                        Your Vote
                      </span>
                    )}
                    <div className="progress">
                      <div
                        className="progress-bar bg-secondary progress-bar-striped progress-bar-animated"
                        style={{
                          width: `${optionTwoVotesPercentage}%`
                        }}
                      >
                        {optionTwoVotesPercentage}%
                      </div>
                    </div>
                    <h6 className="text-center mt-2">{`${
                      optionTwoVotes.length
                    } of ${totalVotes}`}</h6>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = store => ({
  authedUser: store.authentication.authedUser,
  users: store.users,
  questions: store.questions
});

export default connect(mapStateToProps)(AnsweredQuestionDetails);
