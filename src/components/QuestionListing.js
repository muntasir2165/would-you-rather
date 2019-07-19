import React from "react";
import Question from "./Question";

const QuestionListing = props => {
  return (
    <div className="row">
      <div className="col-sm-12">
        {props.questionIds.map(questionId => (
          <Question key={questionId} questionId={questionId} />
        ))}
      </div>
    </div>
  );
};

export default QuestionListing;
