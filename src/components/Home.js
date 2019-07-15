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

  getUnansweredQuestionIds = questions =>
    Object.keys(questions).filter(
      questionId =>
        questions[questionId]["optionOne"]["votes"].length +
          questions[questionId]["optionTwo"]["votes"].length ===
        0
    );
  
  getAnsweredQuestionIds = questions =>
    Object.keys(questions).filter(
      questionId =>
        questions[questionId]["optionOne"]["votes"].length +
          questions[questionId]["optionTwo"]["votes"].length >
        0
    );

  render() {
    const unansweredQuestionIds = this.getUnansweredQuestionIds(
      this.props.questions
    );
    const answeredQuestionIds = this.getAnsweredQuestionIds(
      this.props.questions
    );
    return (
      <Fragment>
        <div class="home-tab-menu d-flex justify-content-center">
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
              <QuestionListing questionIds={unansweredQuestionIds} />
            ) : (
              <QuestionListing questionIds={answeredQuestionIds} />
            )}
          </div>
        </div>
      </Fragment>
    );
  }
}

const mapStateToProps = store => ({
  questions: store.questions.questions
});

export default connect(mapStateToProps)(Home);
