const path = require('path');

module.exports = {
  entry: "./src/js/main.js",
  output: {
    path: path.resolve(__dirname, 'dist' ),
    filename: "bundle.js",
    publicPath: '/'
  },
  devServer: {
    inline: true,
    contentBase: './dist'
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_bomponents)/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015', 'react']
        }
      }
    ]
  }
};