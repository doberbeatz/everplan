import express from 'express'
import React from 'react'
import ReactDOMServer from 'react-dom/server'
import { StaticRouter } from 'react-router'
import {Provider} from 'react-redux'

import App from './app/App'
import store from './redux/store'
import template from './template'

const server = express();
server.use('/assets', express.static('dist/assets'));

const html = ReactDOMServer.renderToString(
    <Provider store={store}>
        <StaticRouter context={{}}>
            <App/>
        </StaticRouter>
    </Provider>
);

server.get('*', (req, res) => {
    res.send(template({
        title: 'Main Page',
        body: html
    }));
});

server.listen(8080, () => {
    console.log('Example app listening on port 8080!')
});