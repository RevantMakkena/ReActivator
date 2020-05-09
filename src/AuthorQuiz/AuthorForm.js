import React from "react";

class AuthorForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      imageUrl: "",
    };
    this.onFieldChange = this.onFieldChange.bind(this);
  }

  onFieldChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  render() {
    return (
      <form>
        <div className='addAuthorForm_Input'>
          <label htmlFor='name'>Name</label>
          <input
            type='text'
            name='name'
            value={this.state.name}
            onClick={this.onFieldChange}></input>
        </div>
        <div className='addAuthorForm_Input'>
          <label htmlFor='imageUrl'>ImageUrl</label>
          <input
            type='text'
            name='imageUrl'
            value={this.state.imageUrl}></input>
        </div>
      </form>
    );
  }
}

export default AuthorForm;
