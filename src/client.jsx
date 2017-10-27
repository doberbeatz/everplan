import React from "react";
import ReactDOM from 'react-dom'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import 'semantic-ui-css/semantic.min.css';
import FeedPage from "./app/pages/FeedPage.jsx";
import LoginPage from "./app/pages/LoginPage.jsx";

ReactDOM.render((
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={FeedPage}/>
            <Route path="/login" component={LoginPage}/>
        </Switch>
    </BrowserRouter>
), document.getElementById('root'));