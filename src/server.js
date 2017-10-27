import express from 'express';
import template from './template';

const server = express();
server.use('/assets', express.static('dist/assets'));

server.get('*', (req, res) => {
    res.send(template({
        title: 'Main Page'
    }));
});

server.listen(8080, () => {
    console.log('Example app listening on port 8080!')
});