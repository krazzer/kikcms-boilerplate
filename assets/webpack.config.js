const path                 = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const BrowserSyncPlugin    = require('browser-sync-webpack-plugin');
const loadIniFile          = require('read-ini-file')

const devMode = process.env.NODE_ENV !== 'production';
const config  = loadIniFile.sync(path.join(__dirname, '../env/config.ini'));
const port    = parseInt(config.docker.id);

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
            port: (3000 + port),
            proxy: 'https://localhost:' + (9000 + port),
            files: [
                {match: ['../app/Views/**/*.twig']}
            ]
        })
    ]
};
