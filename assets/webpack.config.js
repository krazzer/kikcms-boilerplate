const path                 = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const BrowserSyncPlugin    = require('browser-sync-webpack-plugin');

const devMode = process.env.NODE_ENV !== 'production';

module.exports = {
    mode: devMode ? 'development' : 'production',
    entry: ['./js/app.js', './styles/app.scss'],
    output: {
        path: path.resolve(__dirname, '../public_html'),
        publicPath: '/',
        filename: 'js/app.js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: ['babel-loader']
            },
            {
                test: /\.scss$/,
                use: [
                    {loader: MiniCssExtractPlugin.loader},
                    {loader: 'css-loader', options: {importLoaders: 2}},
                    {loader: 'postcss-loader'},
                    {loader: 'sass-loader'}
                ]
            },
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: 'css/app.css'
        }),
        new BrowserSyncPlugin({
            host: 'localhost',
            port: 3028,
            proxy: 'https://localhost:9028',
            files: [
                {match: ['../app/Views/**/*.twig']}
            ]
        })
    ]
};
