import React, {Component} from 'react';
import { Route, Switch} from 'react-router-dom';
import * as BooksAPI from './Components/BooksAPI';
import './App.css';
import { Link } from 'react-router-dom'
import SearchBar from './Components/SearchBar';
import error404 from './Components/Error404';
import BookList from './Components/BookList';



class BooksApp extends Component {
  // Initialize the state of books to be an empty array
  state = {
     books: [] 
    };
  componentDidMount(){
    //Calling the Api inside the ComponentDidMount
    // Chain .then() returns a promise
    // Catch any errors 
    BooksAPI.getAll().then(books => this.setState({ books }));
    
  }

  // Method to Move to a different Shelf
  modifyShelf = (modifiedBook, shelf) => {
    BooksAPI.update(modifiedBook, shelf).then(e => {
      modifiedBook.shelf = shelf;

      //Set the new State that will update with the changed book
      // 2. Remove the Book from the Books array 
      // 3. Add update book

      this.setState (previousState => ({
        books: previousState.books.filter(book => book.id !== modifiedBook.id)
        .concat(modifiedBook)
      }));
    });
  };

  render() {
    const { books } = this.state;

    return (
      <div className="app">
        <Switch>
          <Route
            path="/search"
            render={({ history }) => (
              <SearchBar books={books} modifyShelf={this.modifyShelf} />
            )}
          />
          <Route
            exact
            path="/"
            render={() => (
              <div className="list-books">
                <div className="list-books-title">
                  <h1>MyReads</h1>
                </div>
                <BookList books={books} modifyShelf={this.modifyShelf} />
                <div className="open-search">
                  <Link to="/search">Search</Link>
                </div>
              </div>
            )}
          />
          <Route component={error404} />
        </Switch>
      </div>
    );
  }
}

export default BooksApp;