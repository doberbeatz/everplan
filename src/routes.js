import React from 'react';
import { Switch, Route } from 'react-router-dom';
import FeedPage from "./app/pages/FeedPage.jsx";
import LoginPage from "./app/pages/LoginPage.jsx";

const routes = (
    <Switch>
        <Route exact path="/" component={FeedPage}/>
        <Route path="/login" component={LoginPage}/>
    </Switch>
);

export default routes