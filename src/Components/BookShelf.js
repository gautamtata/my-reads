import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Book from './Book';

class BookShelf extends Component {
  static propTypes = {
    books: PropTypes.array.isRequired,
    modifyShelf: PropTypes.func.isRequired
  };

  render() {
    const { books, modifyShelf } = this.props;

    return (
      <ol className="books-grid">
        {books.map(book => (
          <Book
            book={book}
            books={books}
            key={book.id}
            modifyShelf={modifyShelf}
          />
        ))}
      </ol>
    );
  }
}

export default BookShelf;
