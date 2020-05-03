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

function AuthorQuiz({turnData}) {
  return (
    <div className='container-fluid'>
      <Hero />
      <Turn {...turnData} />
      <Continue />
      <Footer />
    </div>
  );
}

export default AuthorQuiz;
