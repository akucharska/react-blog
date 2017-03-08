const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
  devtool: 'eval',
  entry: [
    'react-hot-loader/patch',
    './src/index'
  ],
  output: {
    path: './build',
    filename: 'index.js'
  },
  devServer: {
    inline: true,
    port: 3000
  },
  resolve: {
    alias: {
      atoms: path.resolve(__dirname, 'src/components/1-atoms/'),
      molecules: path.resolve(__dirname, 'src/components/2-molecules/'),
      organisms: path.resolve(__dirname, 'src/components/3-organisms/'),
      pages: path.resolve(__dirname, 'src/components/4-pages/')
    }
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loaders: ['babel-loader']
      }
    ]
  },
  plugins : [
    new HtmlWebpackPlugin({
      template: './index.html'
    })
  ]
};
