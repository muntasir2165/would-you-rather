import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { handleAddQuestion } from "../actions/shared";

class AddQuestion extends Component {
  state = {
    optionOneText: "",
    optionTwoText: ""
  };

  onOptionTextInputChange = event => {
    event.preventDefault();
    this.setState({ [event.target.name]: event.target.value });
  };

  submitQuestionOptions = event => {
    event.preventDefault();
    this.props.handleAddQuestion({
      author: this.props.authedUser,
      optionOneText: this.state.optionOneText,
      optionTwoText: this.state.optionTwoText
    });
    this.props.history.push("/");
  };
  render() {
    return (
      <div className="row">
        <div className="col-sm-6 offset-sm-3 offset-sm-right-3 border border-secondary rounded mt-2">
          <div className="row bg-secondary">
            <div className="col-sm-12">
              <h3>Create New Question</h3>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-12">
              <h6>Complete the question:</h6>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-12">
              <h4>Would you rather...</h4>
            </div>
          </div>
          <div className="row m-1">
            <div className="col-sm-12">
              <form onSubmit={this.submitQuestionOptions}>
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    name="optionOneText"
                    placeholder="Enter Option One Text Here"
                    value={this.state.optionOneText}
                    onChange={this.onOptionTextInputChange}
                  />
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    name="optionTwoText"
                    placeholder="Enter Option One Text Here"
                    value={this.state.optionTwoText}
                    onChange={this.onOptionTextInputChange}
                  />
                </div>
                <button
                  type="submit"
                  className="btn btn-info btn-block mt-3"
                  disabled={
                    !this.state.optionOneText || !this.state.optionTwoText
                  }
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = store => ({
  authedUser: store.authentication.authedUser
});

const mapDispatchToProps = dispatch => ({
  handleAddQuestion: ({ author, optionOneText, optionTwoText }) =>
    dispatch(handleAddQuestion({ author, optionOneText, optionTwoText }))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(AddQuestion));
