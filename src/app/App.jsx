import React, {Component} from 'react'
import {
    StaticRouter as Router,
    Route
} from 'react-router-dom'
import FeedPage from "./pages/FeedPage.jsx"
import LoginPage from "./pages/LoginPage.jsx"

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
