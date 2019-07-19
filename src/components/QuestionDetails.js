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
      optionOneVotes.includes(this.props.authedUser) ||
      optionTwoVotes.includes(this.props.authedUser) ? (
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
