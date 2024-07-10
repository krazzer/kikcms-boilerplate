const loadIniFile               = require('read-ini-file')
const MiniCssExtractPlugin      = require('mini-css-extract-plugin');
const UglifyJsPlugin            = require('uglifyjs-webpack-plugin')
const BrowserSyncPlugin         = require('browser-sync-webpack-plugin');
const FixStyleOnlyEntriesPlugin = require("webpack-fix-style-only-entries");
const CssMinimizerPlugin        = require("css-minimizer-webpack-plugin");
const path                      = require('path');

const devMode = process.env.NODE_ENV !== 'production';
const config  = loadIniFile.sync(path.join(__dirname, '../env/config.ini'));
const port    = parseInt(config.docker.id);
const key     = config.docker.key;

module.exports = {
    mode: devMode ? 'development' : 'production',
    entry: {app: './js/app.js', style: './styles/app.scss', cms: './styles/cms.scss'},
    output: {
        path: path.resolve(__dirname, '../public_html'),
        publicPath: '/',
        filename: 'js/[name].js'
    },
    optimization: {
        minimize: true,
        minimizer: [
            new CssMinimizerPlugin(),
            new UglifyJsPlugin(),
        ],
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
                    {loader: 'css-loader', options: {importLoaders: 2, sourceMap: true, url: false}},
                    {loader: 'postcss-loader'},
                    {loader: 'sass-loader'}
                ]
            },
        ]
    },
    plugins: [
        new FixStyleOnlyEntriesPlugin(),
        new MiniCssExtractPlugin({
            filename: 'css/[name].css'
        }),
        new BrowserSyncPlugin({
            host: key + '.test',
            open: 'external',
            port: (3000 + port),
            proxy: 'https://localhost:' + (9000 + port),
            files: [
                {match: ['../app/Views/**/*.twig']}
            ]
        })
    ]
};
