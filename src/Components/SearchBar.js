import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import Book from './Book';
import * as BooksAPI from './BooksAPI';
import PropTypes from 'prop-types';

class SearchBar extends Component {
    state = {
        // Tokenize query. Update state as characters
        // are entered
        query : '',
        // Initialize the state of new books to be 
        // empty array
        newBook: [],
        // Boolean value setting a search that doesn't
        // return a book to fase
        badSearch: false
    };


// Method here in the event of new Books

    getBook = (e) => {
        const query = e.target.value;
        // Set state to the query
        this.setState({query});

        // User event: type on keyboard
        if(query) {
            BooksAPI.search(query.trim()).then(books => {
                // With help from Stackoverflow.com
                // Using ternary operator in this case to set the state when the query has input
                // If, newBook is found keep error check as false 
                // Else reinitialize empty array and set the error flag to true.
                books.length > 0
                ? this.setState({newBook: books, badSearch: false})
                : this.setState ({ newBook: [], badSearch: true});
            })
            
        } else this.setState({ newBook: [], badSearch : false});
    };

    // Declare what data structure is expected for props
    static propTypes = {
        books: PropTypes.array.isRequired,
        modifyShelf: PropTypes.func.isRequired
    };
    render(){
        // Destructure the terms to this.state to avoid repition of code
        const { query, newBook, badSearch } = this.state;
        const { books, modifyShelf} = this.props;
        return(
            <div className = "search-books">
                <div className = "search-books-bar">
                    <Link className = "close-search" to= '/'>
                        Close
                    </Link>
                    <div className = "search-books-input-wrapper">
                        <input
                            type = "text"
                            placeholder = "Search by Book name or by author"
                            value = {query}
                            onChange = {this.getBook}

                        />

                    </div>
                </div>
                <div className = "search-books-results">
                    {newBook.length > 0 && (
                        <div> 
                            <h4> Resulting Books {newBook.length} </h4>
                            <ol className = "books-grid">
                                {newBook.map(book => (
                                    <Book
                                        book = {book}
                                        books = {books}
                                        key = {book.id}
                                        modifyShelf = {modifyShelf}

                                    />    
                                ))}
                            </ol>
                        </div>
                    )}

                    {badSearch && (
                        <h2> The Books you requested could not be found. Please search again.</h2>
                    )}
                </div>
            </div>

        );
    }
}

export default SearchBar;