import React, { Component } from 'react';
import {BrowserRouter as Router,Route} from 'react-router-dom'
import content from '../component/Content';
import Details from '../component/Details';
class DieuHuongURL extends Component {
    render() {
        return (
            <Router>
                <div>
                    <Route exact path="/" component={content} />  
                    <Route exact path="/chi-tiet/:slug.:id.html" component={Details} />

                </div>
            </Router>
        );
    }
}

export default DieuHuongURL;