import React, {Component} from 'react'
import {
    BrowserRouter as Router,
    Route
} from 'react-router-dom'
import FeedPage from "./pages/FeedPage";
import LoginPage from "./pages/LoginPage";

class App extends Component {
    render() {
        return (
            <Router>
                <div>
                    <Route exact path="/" component={FeedPage}/>
                    <Route path="/login" component={LoginPage}/>
                </div>
            </Router>
        )
    }
}

export default App
