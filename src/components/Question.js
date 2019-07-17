import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";

class Question extends Component {
  showQuestionDetails = () => {
    this.props.history.push(`/questions/${this.props.questionId}`);
  };

  render() {
    const question = this.props.questions[this.props.questionId];
    const author = this.props.users[question.author];
    return (
      <div className="row border border-secondary rounded m-2 p-1">
        <div className="col-sm-12">
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
                  <div className="row">
                    <div className="col-sm-12">Would you rather</div>
                  </div>
                  <div className="row">
                    <div className="col-sm-12">
                      {`${question.optionOne.text.slice(0, 10)}...`} OR{" "}
                      {`${question.optionTwo.text.slice(0, 10)}...`}
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-sm-12">
                      <button
                        className="btn btn-info btn-block"
                        onClick={this.showQuestionDetails}
                      >
                        View Poll
                      </button>
                    </div>
                  </div>
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
  users: store.users.users,
  questions: store.questions.questions
});

export default connect(mapStateToProps)(withRouter(Question));
