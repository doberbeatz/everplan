const path = require('path');
const webpack = require('webpack');

const env = process.env.NODE_ENV || 'development';

const commonExports = {
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                loader: 'babel-loader?cacheDirectory=true',
                exclude: /node_modules/,
            },
            {
                test: /\.css$/,
                loader: 'style-loader!url-loader!css-loader?localIdentName=[hash:8]&modules=true',
            },
            {
                test: /\.(png|svg|ttf|eot|woff|woff2|otf)$/,
                loader: 'url-loader?limit=100000',
            },
        ]
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: JSON.stringify(env),
            },
        }),
    ],
};

module.exports = [
    Object.assign({},
        commonExports,
        {
            target: 'node',
            entry: path.resolve(__dirname, 'src/server.js'),
            output: {
                path: path.resolve(__dirname, 'dist'),
                filename: 'server.js'
            },
        }
    ),
    Object.assign({},
        commonExports,
        {
            target: 'web',
            entry: path.resolve(__dirname, 'src/client.jsx'),
            output: {
                path: path.resolve(__dirname, 'dist/assets'),
                filename: 'bundle.js',
            },
        }
    ),
];