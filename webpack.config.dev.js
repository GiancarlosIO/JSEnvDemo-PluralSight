const path = require('path');
const webpack = require('webpack');

module.exports = {
  // debug: true, // removed in webpack2
  devtool: 'inline-source-map',
  entry: {
    index: [
      // in order to get the live-reoad you need to use
      // webpack-hot-middleware to :(
      'webpack-hot-middleware/client?reload=true',
      path.resolve(__dirname, 'src/index.js'),
    ],
  },
  target: 'web',
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/',
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)?$/,
        exclude: path.resolve(__dirname, 'node_modules'),
        use: [
          'babel-loader',
        ],
      },
      {
        test: /\.(css|scss|sass)?$/,
        exclude: path.resolve(__dirname, 'node_modules'),
        use: [
          'style-loader',
          'css-loader',
          'sass-loader',
        ],
      },
    ],
  },
  plugins: [
    // in order to get the live-reoad you need to use
    // webpack-hot-middleware to :(
    new webpack.HotModuleReplacementPlugin(),
  ],
};
