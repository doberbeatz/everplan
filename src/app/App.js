import React from 'react'
import {Switch, Route} from 'react-router'

import 'semantic-ui-css/semantic.min.css'
import FeedPage from './pages/FeedPage'
import LoginPage from './pages/LoginPage'

export default class App extends React.Component {
    render() {
        return (
            <Switch>
                <Route exact path='/' component={FeedPage} />
                <Route path='/login' component={LoginPage} />
            </Switch>
        )
    }
}
