import React from "react";
import AuthorForm from "./AuthorForm";

function AddNewAuthor({match, onAddAuthor}) {
  return (
    <div className='addAuthorForm'>
      <h1>Add New Author</h1>
      <AuthorForm onAddAuthor={onAddAuthor} />
    </div>
  );
}

// function AuthorFormWrapper() {
//   return (
//     <AuthorForm onAddAuthor={console.log("I'm Add Author Wrapper")} />
//   );
// }

export default AddNewAuthor;
