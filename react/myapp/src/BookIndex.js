import React from 'react';
import './BookIndex.css';

class SearchBar extends React.Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.props.onChange(event.target.value);
  }

  handleSubmit(event) {
    this.props.onSubmit(event);
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>搜索框：
          <input value={this.props.value} onChange={this.handleChange} />
        </label>
        <input type="submit" value="提交" />
      </form>
    );
  }
}

class BookRow extends React.Component {
  constructor(props) {
    super(props);

    this.handleDelete = this.handleDelete.bind(this);
  }

  handleDelete(event) {
    this.props.onDelete(event);
  }

  render() {
    const book = this.props.book;
    return (
      <tr key={book.id}>
        <td>{book.name}</td>
        <td>{book.author}</td>
        <td>{book.price}</td>
        <td>{book.comments}</td>
        <td>
          <button onClick={this.handleDelete} value={book.id} >
            Delete
          </button>
        </td>
      </tr>
    );
  }
}

class BookTable extends React.Component {
  constructor(props) {
    super(props);

    this.handleDelete = this.handleDelete.bind(this);
  }

  handleDelete(event) {
    // alert('BookTable.deleteBook');
    this.props.onDeleteBook(event);
  }

  render() {
    // const rows = [];
    // this.props.books.forEach((book) => {
    //   rows.push(
    //     <BookRow book={book} onDelete={this.handleDelete} />
    //   );
    // });
    const books = this.props.books.map((book) =>
      <BookRow key={book.id} book={book} onDelete={this.handleDelete} />
    );
    return (
      <table>
        <thead>
          <tr>
            <th>name</th>
            <th>author</th>
            <th>price</th>
            <th>comments</th>
            <th>operate</th>
          </tr>
        </thead>
        <tbody>
          {books}
        </tbody>
      </table>
    );
  }
}


class BookIndex extends React.Component {
  constructor(props) {
    super(props);

    const books = [
      {id: 1, name: 'book1', author: 'author1', price: 123.45},
      {id: 2, name: 'book2', author: 'author2', price: 123.45},
      {id: 3, name: 'book3', author: 'author3', price: 123.45},
      {id: 4, name: 'book4', author: 'author4', price: 123.45},
      {id: 5, name: 'book5', author: 'author5', price: 123.45}
    ];

    this.state = {
      value: '',
      books: books
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.deleteBook = this.deleteBook.bind(this);
    this.deleteRemoteBook = this.deleteRemoteBook.bind(this);
  }

  handleChange(value) {
    this.setState({
      value: value
    });
  }

  handleSubmit(event) {
    alert('search: ' + this.state.value);
    event.preventDefault();
  }

  deleteBook(event) {
    const book_id = parseInt(event.target.value);
    const result = this.deleteRemoteBook(book_id);
    if (!result) {
      alert("delete remote book is error.")
      return;
    }

    const books = this.state.books;
    for (let i in books) {
      if (books[i].id === book_id) {
        books.splice(i, 1);
        console.info("delete local book success.");
        break;
      }
    }
    this.setState({
      books: books
    });
    alert("delete book[" + book_id + "] success.")
  }

  deleteRemoteBook(book_id) {
    console.info('delete remote book: ' + book_id);
    return true;
  }

  render() {
    return (
      <div>
        <SearchBar value={this.state.value} onChange={this.handleChange} onSubmit={this.handleSubmit} />
        <BookTable books={this.state.books} onDeleteBook={this.deleteBook} />
      </div>
    );
  }
}

export default BookIndex;
