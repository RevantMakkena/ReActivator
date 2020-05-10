import React from "react";

class AuthorForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      imageUrl: "",
      books: [],
      bookTemp: "",
    };
    this.onFieldChange = this.onFieldChange.bind(this);
    this.onHandleSubmit = this.onHandleSubmit.bind(this);
    this.handleAddBook = this.handleAddBook.bind(this);
  }

  onHandleSubmit(event) {
    event.preventDefault();
    this.props.onAddAuthor(this.state);
  }

  onFieldChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  handleAddBook(event) {
    event.preventDefault();
    this.setState({
      books: this.state.books.concat([this.state.bookTemp]),
      bookTemp: "",
    });
  }

  render() {
    return (
      <form onSubmit={this.onHandleSubmit}>
        <div className='addAuthorForm_Input'>
          <label htmlFor='name'>Name</label>
          <input
            type='text'
            name='name'
            value={this.state.name}
            onChange={this.onFieldChange}></input>
        </div>
        <div className='addAuthorForm_Input'>
          <label htmlFor='imageUrl'>ImageUrl</label>
          <input
            type='text'
            name='imageUrl'
            value={this.state.imageUrl}
            onChange={this.onFieldChange}></input>
        </div>
        <div className='addAuthorForm_Input'>
          {this.state.books.map((book) => (
            <p key={book}>{book}</p>
          ))}
          <label htmlFor='bookTemp'>Books </label>
          <input
            type='text'
            name='bookTemp'
            value={this.state.bookTemp}
            onChange={this.onFieldChange}></input>
          <input
            type='button'
            value='+'
            onClick={this.handleAddBook}></input>
        </div>
        <input type='submit' value='Add New Author' />
      </form>
    );
  }
}

export default AuthorForm;
