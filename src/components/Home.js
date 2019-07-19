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

  sortQuestionsFromRecentToOldest = questions => {
    questions.sort(
      (a, b) =>
        this.props.questions[b].timestamp - this.props.questions[a].timestamp
    );
    return questions;
  };

  getLoggedInUserUnansweredQuestionIds = () => {
    const unansweredQuestions = Object.keys(this.props.questions).filter(
      questionId =>
        this.props.questions[questionId].optionOne.votes.indexOf(
          this.props.authedUser
        ) === -1 &&
        this.props.questions[questionId].optionTwo.votes.indexOf(
          this.props.authedUser
        ) === -1
    );
    return this.sortQuestionsFromRecentToOldest(unansweredQuestions);
  };

  getLoggedInUserAnsweredQuestionIds = () => {
    const answeredQuestions = Object.keys(this.props.questions).filter(
      questionId =>
        this.props.questions[questionId].optionOne.votes.indexOf(
          this.props.authedUser
        ) !== -1 ||
        this.props.questions[questionId].optionTwo.votes.indexOf(
          this.props.authedUser
        ) !== -1
    );

    return this.sortQuestionsFromRecentToOldest(answeredQuestions);
  };

  render() {
    const loggedInUserUnansweredQuestionIds = this.getLoggedInUserUnansweredQuestionIds();
    const loggedInUserAnsweredQuestionIds = this.getLoggedInUserAnsweredQuestionIds();
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
            {this.state.unansweredTabActive &&
              (loggedInUserUnansweredQuestionIds.length > 0 ? (
                <QuestionListing
                  questionIds={loggedInUserUnansweredQuestionIds}
                />
              ) : (
                <h4 className="text-center">No Unanswered Questions</h4>
              ))}
            {this.state.answeredTabActive &&
              (loggedInUserAnsweredQuestionIds.length > 0 ? (
                <QuestionListing
                  questionIds={loggedInUserAnsweredQuestionIds}
                />
              ) : (
                <h4 className="text-center">No Answered Questions</h4>
              ))}
          </div>
        </div>
      </Fragment>
    );
  }da
}

const mapStateToProps = store => ({
  authedUser: store.authentication.authedUser,
  questions: store.questions
});

export default connect(mapStateToProps)(Home);
