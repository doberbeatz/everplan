import express from 'express'
import React from 'react'
import ReactDOMServer from 'react-dom/server'
import { StaticRouter } from 'react-router'
import { Provider } from 'react-redux'

import App from './app/App'
import profileService from './services/profile'
import configureStore from './redux/store'
import template from './template'

const server = express();
const store = configureStore();

server.use('/assets', express.static('dist/assets'));

server.get('/*', (req, res) => {
    const html = ReactDOMServer.renderToString(
        <Provider store={store}>
            <StaticRouter location={req.url} context={{}}>
                <App/>
            </StaticRouter>
        </Provider>
    );

    res.send(template({
        title: 'Main Page',
        body: html
    }));
});

server.listen(8080, () => {
    console.log('Example app listening on port 8080!')
});