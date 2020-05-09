import React from "react";
import AuthorForm from "./AuthorForm";

function AddNewAuthor({match}) {
  return (
    <div className='addAuthorForm'>
      <h1>Add New Author</h1>
      <AuthorForm />
    </div>
  );
}

export default AddNewAuthor;
