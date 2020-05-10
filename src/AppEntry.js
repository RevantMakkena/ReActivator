import React from "react";
import {Link} from "react-router-dom";
function AppEntry() {
  return (
    <div>
      <button className='btn-dark btn-block'>
        <Link to='/getEmployees'>Get Employees</Link>
      </button>
      <button className='btn-dark btn-block'>
        <Link to='/authorQuiz'>Author Quiz</Link>
      </button>
    </div>
  );
}

export default AppEntry;
