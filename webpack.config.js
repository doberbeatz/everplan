const path = require('path');

const rules = [
    {
        test: /.jsx?$/,
        exclude: /node_modules/,
        use: [
            {
                loader: 'babel-loader',
                options: {
                    cacheDirectory: true,
                }
            }
            ]
    },
    {
        test: /\.css$/,
        loader: "style-loader!css-loader"
    }
];

module.exports = [
    {
        target: 'node',
        entry: path.resolve(__dirname, 'src/server.js'),
        output: {
            path: path.resolve(__dirname, 'dist'),
            filename: 'server.js'
        },
        module: {
            rules: rules
        }
    },
    {
        target: 'web',
        entry: path.resolve(__dirname, 'src/client.jsx'),
        output: {
            path: path.resolve(__dirname, 'dist/assets'),
            filename: 'bundle.js',
        },
        module: {
            rules: rules.concat([{
                test: /\.(png|svg|ttf|eot|woff|woff2|otf)$/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 8192
                        }
                    }
                ]
            }])
        }
    }
];