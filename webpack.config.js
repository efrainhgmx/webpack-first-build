const HtmlWebpackPlugin = require('html-webpack-plugin');
//const path = require('path');

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  output: {
    clean: true,
    /* path: path.resolve(__dirname, './dist'),
    filename: 'main.js', */
  },
  module: {
    rules: [{
        test: /\.html$/i,
        loader: 'html-loader',
        options: {
            sources: false,
           /*  attributes: false,
            minimize: false */
        },
    }]
  },
  plugins: [
    new HtmlWebpackPlugin({
        template: './src/index.html',
        filename: './index.html'
  })],
};