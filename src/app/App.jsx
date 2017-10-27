import React, {Component} from 'react'
import Route from 'react-router-dom'
import 'semantic-ui-css/semantic.min.css';
import FeedPage from "./pages/FeedPage.jsx"
import LoginPage from "./pages/LoginPage.jsx"

class App extends Component {
    render() {
        return (
            <div>
                <Route exact path="/" component={FeedPage}/>
                <Route path="/login" component={LoginPage}/>
            </div>
        )
    }
}

export default App
