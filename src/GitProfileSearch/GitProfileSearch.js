import React from "react";
import Axios from "axios";

class GitProfileSearch extends React.Component {
  state = {userName: ""};
  handleSubmit = async (event) => {
    event.preventDefault();
    const response = await Axios.get(
      `https://api.github.com/users/${this.state.userName}`
    );
    this.props.onSubmit(response.data);
    this.setState({userName: ""});
  };
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type='text'
          placeholder='github-username-search'
          value={this.state.userName}
          onChange={(event) =>
            this.setState({userName: event.target.value})
          }></input>
        <button>Add User</button>
      </form>
    );
  }
}

export default GitProfileSearch;
