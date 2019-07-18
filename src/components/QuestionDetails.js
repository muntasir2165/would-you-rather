import React, { Component } from "react";
import { connect } from "react-redux";
import AnsweredQuestionDetails from "./AnsweredQuestionDetails";
import UnAnsweredQuestionDetails from "./UnAnsweredQuestionDetails";

class QuestionDetails extends Component {
  render() {
    const question = this.props.questions[this.props.match.params.questionId];
    const optionOneVotes = question.optionOne.votes;
    const optionTwoVotes = question.optionTwo.votes;

    return optionOneVotes.indexOf(this.props.authedUser) !== -1 ||
      optionTwoVotes.indexOf(this.props.authedUser) !== -1 ? (
      <AnsweredQuestionDetails questionId={question.id} />
    ) : (
      <UnAnsweredQuestionDetails questionId={question.id} />
    );
  }
}

const mapStateToProps = store => ({
  authedUser: store.authentication.authedUser,
  questions: store.questions
});

export default connect(
  mapStateToProps,
  null
)(QuestionDetails);
