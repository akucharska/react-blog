const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const path = require('path');

module.exports = {
  devtool: 'eval',
  entry: [
    'react-hot-loader/patch',
    path.resolve(__dirname, './src/index')
  ],
  output: {
    path: path.resolve(__dirname, './build'),
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
      pages: path.resolve(__dirname, 'src/components/4-pages/'),
      styles: path.resolve(__dirname, 'src/styles/'),
      variables: path.resolve(__dirname, 'src/styles/1-tools/1_variables.scss')
    }
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loaders: ['babel-loader']
      }, {
        test: /\.scss$/,
        loader: ExtractTextPlugin.extract('css-loader?modules&importLoaders=1&localIdentName=[local]!sass-loader')
      }
    ]
  },
  plugins : [
    new HtmlWebpackPlugin({
      template: './index.html'
    }),
    new ExtractTextPlugin({
      filename: 'styles/main.css',
      disable: false,
      allChunks: true
    })
  ]
};
