import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
// import { handleUpdateUserAnswersAndAddQuestionAnswer } from "../actions/shared";

class AnsweredQuestionDetails extends Component {
  state = {
    answer: "optionOne"
  };

  onAnswerSelect = event => {
    this.setState({
      answer: event.currentTarget.value
    });
  };

  submitQuestionAnswer = event => {
    event.preventDefault();
    // this.props.handleUpdateUserAnswersAndAddQuestionAnswer({
    //   authedUser: this.props.id,
    //   qid: this.props.questionId,
    //   answer: this.state.answer
    // });
    this.props.history.push(`/question/${this.props.questionId}`);
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

          <div className="row">
            <div className="col-sm-12">
              <div className="row">
                <div className="col-sm-4">
                  <img
                    src={author.avatarURL}
                    alt="author avatar"
                    className="img-thumbnail"
                  />
                </div>

                <div className="col-sm-8">
                  <h4>Would You Rather...</h4>
                  <form onSubmit={this.submitQuestionAnswer}>
                    <div className="form-check">
                      <label className="form-check-label" htmlFor="optionOne">
                        <input
                          type="radio"
                          className="form-check-input"
                          name="optionOne"
                          value="optionOne"
                          checked={this.state.answer === "optionOne"}
                          onChange={this.onAnswerSelect}
                        />
                        {question.optionOne.text}
                      </label>
                    </div>
                    <div className="form-check">
                      <label className="form-check-label" htmlFor="optionTwo">
                        <input
                          type="radio"
                          className="form-check-input"
                          name="optionTwo"
                          value="optionTwo"
                          checked={this.state.answer === "optionTwo"}
                          onChange={this.onAnswerSelect}
                        />
                        {question.optionTwo.text}
                      </label>
                    </div>
                    <button type="submit" className="btn btn-info btn-block">
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
  id: store.authentication.id,
  users: store.users.users,
  questions: store.questions.questions
});

const mapDispatchToProps = dispatch => ({
  // handleUpdateUserAnswersAndAddQuestionAnswer: ({ authedUser, qid, answer }) =>
  //   dispatch(
  //     handleUpdateUserAnswersAndAddQuestionAnswer({ authedUser, qid, answer })
  //   )
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(AnsweredQuestionDetails));
