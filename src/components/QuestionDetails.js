import React, { Component } from "react";
import { connect } from "react-redux";
import AnsweredQuestionDetails from "./AnsweredQuestionDetails";
import UnAnsweredQuestionDetails from "./UnAnsweredQuestionDetails";

class QuestionDetails extends Component {
  render() {
    const question = this.props.questions[this.props.match.params.id];
    const optionOneVotes = question.optionOne.votes;
    const optionTwoVotes = question.optionTwo.votes;

    return optionOneVotes.indexOf(this.props.id) !== -1 ||
      optionTwoVotes.indexOf(this.props.id) !== -1 ? (
      <AnsweredQuestionDetails questionId={this.props.match.params.id} />
    ) : (
      <UnAnsweredQuestionDetails questionId={this.props.match.params.id} />
    );
  }
}

const mapStateToProps = store => ({
  id: store.authentication.id,
  questions: store.questions.questions
});

export default connect(
  mapStateToProps,
  null
)(QuestionDetails);
