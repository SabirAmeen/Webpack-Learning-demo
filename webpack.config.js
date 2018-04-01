const path = require('path');

module.exports = {
  entry: './src/index.js',
  mode:'development',
  output: {
    filename: 'bundle.js',
    path: __dirname + '/dist',
  },
  module: {
    rules: [
        {
            test: /\.js$/,
            use: [
                {
                    loader: 'babel-loader',
                    options: {
                        presets: ['es2015']
                    }
                }
            ]
        },
        {
            test: /\.scss$/,
            use: ['style-loader', 'css-loader', 'sass-loader']
        }
    ]
},
};