import React, {Component} from 'react'
import Route from 'react-router-dom'
import 'semantic-ui-css/semantic.min.css';
import FeedPage from "./pages/FeedPage.jsx"
import LoginPage from "./pages/LoginPage.jsx"
import {Switch} from "react-router";

class App extends Component {
    render() {
        return (
            <Switch>
                <Route exact path="/" component={FeedPage}/>
                <Route path="/login" component={LoginPage}/>
            </Switch>
        )
    }
}

export default App
