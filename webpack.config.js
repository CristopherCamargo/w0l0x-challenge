const path = require('path');
const HtmlWebPackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: 'development',
  entry: "./src/index.tsx",
  output: {
    publicPath: '/',
    path: path.resolve(__dirname, 'dist/static'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        loader: 'ts-loader'
      }
    ]
  },
  devtool: 'inline-source-map',
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  plugins: [
    new HtmlWebPackPlugin({
        hash: true,
        filename: "index.html",
        template: "./index.html"
    })
  ]
}