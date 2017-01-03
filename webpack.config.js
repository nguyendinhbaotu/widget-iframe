require('webpack');
require('babel-loader');
require('awesome-typescript-loader');
const babelConfig = JSON.stringify({
    presets: [
        ['babel-preset-es2015', { modules: false }]
    ]
});

module.exports = {
    name: 'default',
    entry: {
        'widget': './widget.js',
        'widget.polyfills': './widget.polyfills.ts'
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
    }
}