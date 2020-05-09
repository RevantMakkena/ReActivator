import React from "react";
import AuthorQuizEntry from "./AuthorQuiz/AuthorQuizEntry";
import {Link} from "react-router-dom";
function AppEntry() {
  return (
    <div>
      <AuthorQuizEntry />
      <Link to='/getEmployees'>Get Employees</Link>
      <Link to='/authorQuiz'>Author Quiz</Link>
    </div>
  );
}

export default AppEntry;
