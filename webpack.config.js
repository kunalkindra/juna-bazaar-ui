var ExtractTextPlugin = require('extract-text-webpack-plugin'),
    DashboardPlugin = require('webpack-dashboard/plugin');


module.exports = {
    entry: {
      javascript: './index.js',
      html: './index.html',
      css: './app/style/style.scss'
    },

    output: {
        filename: 'bundle.js',
        path: __dirname + "/dist"
    },
    resolve: {
        extensions: ['', '.js', '.jsx', '.json']
    },
    devServer: {
        historyApiFallback: {
            index: 'index.html'
        }
    },
    module: {
        loaders: [
            {
                test: /.jsx?$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                query: {
                    presets: ['es2015', 'react']
                }
            },
            {
                test: /\.scss$/,
                exclude: /node_modules/,
                loader: ExtractTextPlugin.extract('css!sass')
            },
            { 
              test: /\.(png|woff|woff2|eot|ttf|svg)$/, 
              exclude: /node_modules/,
              loader: 'url-loader'
            },
            {
              test: /\.html/,
              loader: "file?name=[name].[ext]"
            }
        ]
    },

    devtool: "inline-source-map",

    plugins: [
        new ExtractTextPlugin('style.css', {
            allChunks: true
        }),
        new DashboardPlugin()
    ]
}
