import React from "react";

class GitProfileSearch extends React.Component {
  userNameInput = React.createRef();
  handleSubmit = (event) => {
    event.preventDefault();
    console.log(this.userNameInput.current.value);
  };
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input type='text' placeholder='github-username-search' ref={this.userNameInput}></input>
        <button>Add User</button>
      </form>
    );
  }
}

export default GitProfileSearch;
