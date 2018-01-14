const path = require('path');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = [
    {
        target: 'node',
        entry: ['babel-polyfill', path.resolve(__dirname, 'src/server.js')],
        output: {
            path: path.resolve(__dirname, 'dist'),
            filename: 'server.js'
        },
        module: {
            rules: [
                {
                    test: /\.jsx?$/,
                    loader: 'babel-loader?cacheDirectory=true',
                    exclude: /node_modules/,
                },
                {test: /\.css$/, loader: 'ignore-loader'},
                {test: /\.(png|svg|ttf|eot|woff|woff2|otf)$/, loader: 'ignore-loader'},
            ]
        },
    },
    {
        target: 'web',
        entry: ['babel-polyfill', path.resolve(__dirname, 'src/client.js')],
        output: {
            path: path.resolve(__dirname, 'dist/assets'),
            filename: 'bundle.js',
        },
        module: {
            rules: [
                {
                    test: /\.jsx?$/,
                    loader: 'babel-loader?cacheDirectory=true',
                    exclude: /node_modules/,
                },
                {
                    test: /\.css$/,
                    loader: ExtractTextPlugin.extract(
                        'css-loader?minimize',
                        'style-loader',
                        'postcss-loader',
                        'url-loader'
                    ),
                },
                {
                    test: /\.(png|svg|ttf|eot|woff|woff2|otf)$/,
                    loader: 'url-loader?limit=100000',
                },
            ]
        },
        plugins: [
            new ExtractTextPlugin("bundle.css", {
                allChunks: true
            }),
        ],
    }
];