import express from 'express';
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import { StaticRouter } from 'react-router';
import template from './template';
import routes from './routes';

const server = express();
server.use('/assets', express.static('dist/assets'));

const html = ReactDOMServer.renderToString(
    <StaticRouter>
        {routes}
    </StaticRouter>
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