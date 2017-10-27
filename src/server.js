import path from 'path';
import express from 'express';
import template from './template';

const server = express();
server.use('/assets', express.static(path.join(__dirname, 'assets')));

server.get('/', (req, res) => {
    res.send(template({
        title: 'Main Page'
    }));
});

server.listen(8080, () => {
    console.log('Example app listening on port 3000!')
});