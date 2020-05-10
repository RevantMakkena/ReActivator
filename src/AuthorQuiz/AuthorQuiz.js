import React from "react";
import "./AuthorQuiz.css";
import Hero from "./Hero";
import Turn from "./Turn";

function Continue({show, onContinue}) {
  return (
    <div className='row continue'>
      {show ? (
        <div className='col-11'>
          <button
            className='btn btn-primary btn-lg float-right'
            onClick={onContinue}>
            Continue
          </button>
        </div>
      ) : null}
    </div>
  );
}

function Footer() {
  return <div></div>;
}

function AuthorQuiz({
  turnData,
  highlight,
  onAnswerSelected,
  onContinue,
}) {
  return (
    <div className='container-fluid'>
      <Hero />
      <Turn
        {...turnData}
        highlight={highlight}
        onAnswerSelected={onAnswerSelected}
      />
      <Continue
        show={highlight === "correct"}
        onContinue={onContinue}
      />
      <Footer />
    </div>
  );
}

export default AuthorQuiz;
