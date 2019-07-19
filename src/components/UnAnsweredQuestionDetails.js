import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { handleAddQuestionAnswer } from "../actions/shared";

class UnAnsweredQuestionDetails extends Component {
  state = {
    answer: ""
  };

  onAnswerSelect = event => {
    this.setState({
      answer: event.currentTarget.value
    });
  };

  submitQuestionAnswer = event => {
    event.preventDefault();
    this.props.handleAddQuestionAnswer({
      authedUser: this.props.authedUser,
      qid: this.props.questionId,
      answer: this.state.answer
    });
    setTimeout(
      () => this.props.history.push(`/questions/${this.props.questionId}`),
      1000
    );
  };

  render() {
    const question = this.props.questions[this.props.questionId];
    const author = this.props.users[question.author];
    return (
      <div className="row">
        <div className="col-sm-6 offset-sm-3 offset-sm-right-3 border border-secondary rounded mt-2">
          <div className="row bg-secondary">
            <div className="col-sm-12">
              <h5>{author.name} asks:</h5>
            </div>
          </div>

          <div className="row text-center">
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
                  <h4>Would You Rather...</h4>
                  <form onSubmit={this.submitQuestionAnswer}>
                    <div className="form-check">
                      <input
                        type="radio"
                        className="form-check-input"
                        name="optionOne"
                        value="optionOne"
                        checked={this.state.answer === "optionOne"}
                        onChange={this.onAnswerSelect}
                      />
                      {question.optionOne.text}{" "}
                    </div>
                    <div className="form-check">
                      <input
                        type="radio"
                        className="form-check-input"
                        name="optionTwo"
                        value="optionTwo"
                        checked={this.state.answer === "optionTwo"}
                        onChange={this.onAnswerSelect}
                      />
                      {question.optionTwo.text}
                    </div>
                    <button
                      type="submit"
                      className="btn btn-info m-3"
                      disabled={
                        !this.state.answer
                      }
                    >
                      Submit
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = store => ({
  authedUser: store.authentication.authedUser,
  users: store.users,
  questions: store.questions
});

const mapDispatchToProps = dispatch => ({
  handleAddQuestionAnswer: ({ authedUser, qid, answer }) =>
    dispatch(handleAddQuestionAnswer({ authedUser, qid, answer }))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(UnAnsweredQuestionDetails));
