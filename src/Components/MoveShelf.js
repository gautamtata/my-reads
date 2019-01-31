import React, {Component } from 'react';
import PropTypes from 'prop-types';

class MoveShelf extends Component {
    static propTypes = {
        book: PropTypes.object.isRequired,
        books: PropTypes.array.isRequired,
        modifyShelf: PropTypes.func.isRequired
    };

    amendShelf = e => {
        this.props.modifyShelf(this.props.book, e.target.value);
    }

    render(){
        const {book, books } = this.props;
       
        let currShelf = 'none';

        for(let item of books){
            if (item.id === book.id){
                currShelf = item.shelf;
                break;
            }
        }
        return(
            <div className="book-shelf-changer">
            <select onChange={this.amendShelf} defaultValue={currShelf}>
              <option value="none" disabled>
                Move to .. 
              </option>
              <option value="currentlyReading">Currently Reading</option>
              <option value="wantToRead">Want to Read</option>
              <option value="read">Read</option>
              <option value="none">None</option>
            </select>
          </div>
            
        );
    }

}

export default MoveShelf;