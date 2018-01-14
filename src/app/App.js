import React from 'react'
import { Switch, Route } from 'react-router'

import 'semantic-ui-css/semantic.min.css'
import FeedPage from './pages/FeedPage'
import LoginPage from './pages/LoginPage'
import RegisterPage from './pages/RegisterPage'
import AuthCheck from './containers/AuthCheck';

export default class App extends React.Component {
    render() {
        return (
            <Switch>
                <Route path='/login' component={LoginPage} />
                <Route path='/login' component={RegisterPage} />

                <AuthCheck>
                    <Route exact path='/' component={FeedPage} />
                </AuthCheck>
            </Switch>
        )
    }
}
