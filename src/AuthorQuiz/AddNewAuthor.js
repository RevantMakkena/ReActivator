import React from "react";

function AddNewAuthor({match}) {
  return (
    <div>Hi Guy's, I'm the new author {JSON.stringify(match)}</div>
  );
}

export default AddNewAuthor;
