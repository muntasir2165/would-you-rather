import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import classnames from "classnames";
import QuestionListing from "./QuestionListing";

class Home extends Component {
  state = {
    unansweredTabActive: true,
    answeredTabActive: false
  };

  switchTab = (unansweredTabActive, answeredTabActive) => {
    this.setState({ unansweredTabActive, answeredTabActive });
  };

  getLoggedInUserUnansweredQuestionIds = questions =>
    Object.keys(questions).filter(
      questionId =>
        questions[questionId].optionOne.votes.indexOf(this.props.authedUser) ===
          -1 &&
        questions[questionId].optionTwo.votes.indexOf(this.props.authedUser) ===
          -1
    );

  getLoggedInUserAnsweredQuestionIds = questions =>
    Object.keys(questions).filter(
      questionId =>
        questions[questionId].optionOne.votes.indexOf(this.props.authedUser) !==
          -1 ||
        questions[questionId].optionTwo.votes.indexOf(this.props.authedUser) !==
          -1
    );

  render() {
    const loggedInUserUnansweredQuestionIds = this.getLoggedInUserUnansweredQuestionIds(
      this.props.questions
    );
    const loggedInUserAnsweredQuestionIds = this.getLoggedInUserAnsweredQuestionIds(
      this.props.questions
    );
    return (
      <Fragment>
        <div className="home-tab-menu d-flex justify-content-center">
          <div className="btn bg-light my-4">
            <h4
              className={classnames("tab-options p-1", {
                active: this.state.unansweredTabActive
              })}
              onClick={() => this.switchTab(true, false)}
            >
              Unanswered Questions
            </h4>
          </div>
          <div className="btn bg-light my-4">
            <h4
              className={classnames("tab-options p-1", {
                active: this.state.answeredTabActive
              })}
              onClick={() => this.switchTab(false, true)}
            >
              Answered Questions
            </h4>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-6 offset-sm-3 offset-sm-right-3">
            {this.state.unansweredTabActive ? (
              <QuestionListing
                questionIds={loggedInUserUnansweredQuestionIds}
              />
            ) : (
              <QuestionListing questionIds={loggedInUserAnsweredQuestionIds} />
            )}
          </div>
        </div>
      </Fragment>
    );
  }
}

const mapStateToProps = store => ({
  authedUser: store.authentication.authedUser,
  questions: store.questions.questions
});

export default connect(mapStateToProps)(Home);
