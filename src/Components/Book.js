import React, {Component} from 'react';
import PropTypes from 'prop-types';
import MoveShelf from './MoveShelf';
import noImage from '../images/no-image.jpg';


class Book extends Component {
    static propTypes = {
        book: PropTypes.object.isRequired,
        books: PropTypes.array,
        modifyShelf: PropTypes.func.isRequired
    }

    render(){

        const {book, books, modifyShelf } = this.props;
        // Stackoverflow
        const coverImg =
      book.imageLinks && book.imageLinks.thumbnail
        ? book.imageLinks.thumbnail
        : noImage;
        const title = book.title ? book.title : 'No Book';
        return (
            <li>
              <div className="book">
                <div className="book-top">
                  <div className="book-cover" style={{ backgroundImage: `url(${coverImg})` }}/>
                  <MoveShelf book={book} books={books} modifyShelf={modifyShelf} />
                </div>
                <div className="book-title">{title}</div>
                {
                book.authors &&
                  book.authors.map((author, index) => (
                    <div className="book-authors" key={index}>
                      {author}
                    </div>
                  ))}
              </div>
            </li>
          );
    }
}

export default Book;