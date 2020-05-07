import React from "react";
import "./AuthorQuiz.css";
import Hero from "./Hero";
import Turn from "./Turn";

function Continue() {
  return <div></div>;
}

function Footer() {
  return <div></div>;
}

function AuthorQuiz({turnData, highlight, onAnswerSelected}) {
  return (
    <div className='container-fluid'>
      <Hero />
      <Turn
        {...turnData}
        highlight={highlight}
        onAnswerSelected={onAnswerSelected}
      />
      <Continue />
      <Footer />
    </div>
  );
}

export default AuthorQuiz;
