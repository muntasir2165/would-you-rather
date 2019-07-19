import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import AnsweredQuestionDetails from "./AnsweredQuestionDetails";
import UnAnsweredQuestionDetails from "./UnAnsweredQuestionDetails";

class QuestionDetails extends Component {
  componentWillMount() {
    // if the question with the question id this.props.match.params.questionId doesn't exist, redirect the logged in user to the page-not-found page
    if (!this.props.questions[this.props.match.params.questionId]) {
      this.props.history.push("/page-not-found");
    }
  }

  render() {
    const question = this.props.questions[this.props.match.params.questionId];
    const optionOneVotes = question && question.optionOne.votes;
    const optionTwoVotes = question && question.optionTwo.votes;

    return question ? (
      optionOneVotes.indexOf(this.props.authedUser) !== -1 ||
      optionTwoVotes.indexOf(this.props.authedUser) !== -1 ? (
        <AnsweredQuestionDetails questionId={question.id} />
      ) : (
        <UnAnsweredQuestionDetails questionId={question.id} />
      )
    ) : null;
  }
}

const mapStateToProps = store => ({
  authedUser: store.authentication.authedUser,
  questions: store.questions
});

export default connect(mapStateToProps)(withRouter(QuestionDetails));
