var webpack = require('webpack');
var path = require('path');

var DIST_DIR = path.resolve(__dirname, 'dist');
var SRC_DIR = path.resolve(__dirname, 'src');

var config = {
    entry: SRC_DIR + '/js/index.js',
    output: {
        path: DIST_DIR + '/app/',
        filename: 'bundle.js',
        publicPath: '/app/'
    },
    module: {
        loaders: 
        [
            {
                test: /\.js?/,
                include: SRC_DIR,
                exclude: /node_modules/, 
                loader: 'babel-loader',
                query: {
                    presets: ['react', 'env', 'stage-3']
                }
            },
            {
               test: /\.css?/,
               include: SRC_DIR, 
               loader: 'style-loader!css-loader'
            }
        ]
    },
    plugins: [
        new webpack.ProvidePlugin({
            "React": "react",
        }),
  ],
}

module.exports = config;