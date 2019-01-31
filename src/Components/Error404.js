import React, {Component} from 'react';
import { Link } from 'react-router-dom';
// Import some image from some place

class error404 extends Component {
    render(){
        return(
            <div>
                <h1 className = "not-found-title"> The Books you are Looking for are not found
                 </h1>

                 <div className = "home-link">
                     <Link to = '/'> Back to Home Page </Link>
                 </div>
            </div>
        );
    }
}

export default error404;