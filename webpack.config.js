const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'main.js',
  },
  module: {
    rules: [{
        test: /\.html$/i,
        loader: 'html-loader',
        options: {
            attributes: false,
            minimize: false
        },
    }]
  },
  plugins: [new HtmlWebpackPlugin({
    templante: './src/index.html',
    filename: './index.html'
  })],
};