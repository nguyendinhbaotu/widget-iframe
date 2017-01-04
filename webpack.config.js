const webpack = require('webpack');
const ENV = process.env.NODE_ENV = process.env.ENV = 'production';
const APP_CONFIG = {
    SCRIPT_URL: 'https://widget-iframe.firebaseapp.com/widget.js'
};
const babelConfig = JSON.stringify({
    presets: [
        ['babel-preset-es2015', { modules: false }]
    ]
});

module.exports = {
    name: 'default',
    entry: {
        'widget': './widget.js',
        'widget.content': './widget.content.js'
    },
    output: {
        filename: '[name].js',
        path: 'public'
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                loaders: [`babel-loader?${babelConfig}`],
                exclude: [/(node_modules)/]
            },
            {
                test: /\.ts$/,
                loaders: 'awesome-typescript-loader',
                exclude: [/(node_modules)/]
            },
            {
                test: /\.css$/, loaders: ['style-loader', 'css-loader', 'postcss-loader']
            },
            {
                test: /\.(scss|sass)$/, loaders: ['style-loader', 'css-loader', 'postcss-loader', 'sass-loader']
            }
        ]
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env': {
                'ENV': JSON.stringify(ENV),
                'APP_CONFIG': JSON.stringify(APP_CONFIG)
            }
        })
    ]
}