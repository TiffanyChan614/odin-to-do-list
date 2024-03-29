const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: './src/js/index.js',
  devtool: 'inline-source-map',
  devServer: {
    static: './dist',
    open: {
      app: {
        name: 'Google Chrome',
      },
    },
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'To Do List',
      template: './src/index.html',
      filename: './index.html',
    }),
  ],
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
  },
  optimization: {
    runtimeChunk: 'single',
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
};
