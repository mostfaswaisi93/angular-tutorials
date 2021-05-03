const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'bundle.[contenthash].js',
        path: path.resolve(__dirname, './dist')
    },
    mode: 'none',
    module: {
        rules: [{
            test: /\.css$/,
            use: [
                'style-loader', 'css-loader'
            ]
        }]
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({ filename: 'index.html' }),
    ],
    devServer: {
        contentBase: path.resolve(__dirname, './dist'),
        // compress: true,
        index: 'index.html',
        port: 5200,
    },
};